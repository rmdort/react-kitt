import React from 'react'
import mitt from 'mitt'

/* Simple event emitter */
const emitter = mitt()

/* Flag to check if events have been attached */
var attached = false

export default function withKeydown (options) {
  return (WrappedComponent) => {
    class KeyDownHandler extends React.Component {
      constructor (props) {
        super(props)
        this.state = {
          keyCode: null
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
      };
      componentDidMount () {
        if (!attached) {
          initEvents()
        }
        attached = true
        emitter.on('keydown', this.handleKeyDown)
      }
      componentWillReceiveProps (nextProps) {
        this.setState({
          keyCode: null
        })
      }
      handleKeyDown (event) {
        this.setState({
          keyCode: event.which
        })
      };
      render () {
        return <WrappedComponent {...this.props} keyCode={this.state.keyCode} />
      }
    }
    return KeyDownHandler
  }
}

function initEvents () {
  document.addEventListener('keydown', (event) => emitter.emit('keydown', event))
}

import emitter from './../../emitter'
import { compose, lifecycle, withStateHandlers } from 'recompose'

/* Flag to check if events have been attached */
var attached = false

export default function withKeydown (options) {
  return (WrappedComponent) => {
    return compose(
      withStateHandlers(
        {
          keyCode: null
        },
        {
          handleKeyDown: () => (event) => {
            /* Respect options.keyCode */
            return {
              keyCode: event.which === options.keyCode ? event.which : null
            }
          },
          clearCode: () => () => ({ keyCode: null })
        }
      ),
      lifecycle({
        componentDidMount () {
          if (!attached) initEvents()
          attached = true
          emitter.on('keydown', (event) => {
            this.props.handleKeyDown(event)
            /* Clear KeyCode */
            setTimeout(this.props.clearCode)
          })
        }
      })
    )(WrappedComponent)
  }
}

function initEvents () {
  document.addEventListener('keydown', (event) => emitter.emit('keydown', event))
}

export { withKeydown }

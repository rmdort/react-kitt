import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { withStateHandlers } from 'recompose'
import { alertClassName, alertTitleClassName } from './../../settings'
import { CSSTransition } from 'react-transition-group'
import './style.scss'

const Alert = ({ title, isOpen, children, onClose, hide, animation, animationTimeout, className, type }) => {
  let classes = cx(alertClassName, `${alertClassName}-${type}`, className)
  function handleClose () {
    onClose && onClose()
    hide()
  }
  return (
    <CSSTransition in={isOpen} unmountOnExit classNames={animation || ''} timeout={animationTimeout}>
      <div className={classes}>
        {title
          ? <div className={alertTitleClassName}>{title}</div>
          : null
        }
        {typeof children === 'function'
          ? children({ hide: handleClose })
          : children
        }
        <button onClick={handleClose}>Hide</button>
      </div>
    </CSSTransition>
  )
}

Alert.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  type: PropTypes.oneOf([
    'info', 'success', 'danger', 'warning'
  ])
}

Alert.defaultProps = {
  title: null,
  type: 'info',
  isOpen: true,
  animation: 'o-slide',
  animationTimeout: 200,
  className: null,
  children: null
}

const AlertWithState = withStateHandlers(
  (props) => ({
    isOpen: props.isOpen
  }),
  {
    hide: ({ isOpen }) => () => ({ isOpen: false }),
    open: ({ isOpen }) => () => ({ isOpen: true })
  }
)(Alert)

export { AlertWithState as Alert }
export default AlertWithState

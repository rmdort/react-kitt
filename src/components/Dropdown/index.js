import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStateHandlers } from 'recompose'
import onClickOutside from 'react-onclickoutside'
import { ddClassName, ddActiveClassName, ddContentClassName, ddTriggerClassName, ddTriggerActiveClassName, ddRightClassName } from './../../settings'
import { CSSTransition } from 'react-transition-group'
import './style.scss'
import KeyDownHandler from './../../decorators/keydown'

const Dropdown = ({ isOpen, children, animation, animationTimeout, toggle, hide, label, hAlign, keyCode }) => {
  const parentClassName = cx(ddClassName, {
    [`${ddActiveClassName}`]: isOpen,
    [`${ddRightClassName}`]: hAlign === 'right'
  })
  const triggerClassName = cx(ddTriggerClassName, {
    [`${ddTriggerActiveClassName}`]: isOpen
  })
  /* Close on esc */
  if (keyCode === 27) {
    setTimeout(hide)
  }
  /* If animation is disabled reset animationTimeout */
  animationTimeout = !animation ? 0 : animationTimeout
  return (
    <div className={parentClassName}>
      <div
        className={triggerClassName}
        onClick={toggle}
      >
        {label}
      </div>
      <CSSTransition in={isOpen} unmountOnExit classNames={animation || ''} timeout={animationTimeout}>
        <div
          aria-hidden={!isOpen}
          className={ddContentClassName}
          tabIndex={0}
        >
          {typeof children === 'function'
            ? children({ hide })
            : children
          }
        </div>
      </CSSTransition>
    </div>
  )
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  hAlign: PropTypes.oneOf(['right', 'left']),
  children: PropTypes.any
}

Dropdown.defaultProps = {
  animation: 'o-slide-down',
  animationTimeout: 200,
  hAlign: 'left'
}

var clickOutsideConfig = {
  handleClickOutside: (instance) => {
    return (e) => {
      instance.stateUpdaters.hide()
    }
  }
}

/* With state */
const DropdownWithState = withStateHandlers(
  {
    isOpen: false
  },
  {
    toggle: ({ isOpen }) => (event) => ({ isOpen: !isOpen }),
    hide: ({ isOpen }) => () => ({ isOpen: false })
  }
)(KeyDownHandler({ keyCode: 27 })(Dropdown))

export { DropdownWithState as Dropdown }
export default DropdownWithState

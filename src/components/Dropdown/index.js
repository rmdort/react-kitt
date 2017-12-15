import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStateHandlers, withHandlers, compose } from 'recompose'
import onClickOutside from 'react-onclickoutside'
import {
  ddClassName,
  ddActiveClassName,
  ddContentClassName,
  ddTriggerClassName,
  ddTriggerActiveClassName,
  ddRightClassName,
} from './../../settings'
import { CSSTransition } from 'react-transition-group'
import './style.scss'
import withKeydown from './../../decorators/withKeydown'
import withToggle from './../../decorators/withToggle'

function Dropdown({
  isOpen,
  children,
  animation,
  animationTimeout,
  toggle,
  hide,
  label,
  hAlign,
  keyCode
}) {
  const parentClassName = cx(ddClassName, {
    [`${ddActiveClassName}`]: isOpen,
    [`${ddRightClassName}`]: hAlign === 'right',
  })
  const triggerClassName = cx(ddTriggerClassName, {
    [`${ddTriggerActiveClassName}`]: isOpen,
  })
  /* Close on esc */
  if (keyCode === 27) {
    /* Prevent race conditions for render and setState */
    setTimeout(hide)
  }
  /* If animation is disabled reset animationTimeout */
  animationTimeout = !animation ? 0 : animationTimeout
  return (
    <div className={parentClassName}>
      <div className={triggerClassName} onClick={toggle} tabIndex="0">
        {label}
      </div>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        classNames={animation || ''}
        timeout={animationTimeout}
      >
        <div aria-hidden={!isOpen} className={ddContentClassName}>
          {typeof children === 'function' ? children({ hide }) : children}
        </div>
      </CSSTransition>
    </div>
  )
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  hAlign: PropTypes.oneOf(['right', 'left']),
  children: PropTypes.any,
}

Dropdown.defaultProps = {
  animation: 'o-slide-down',
  animationTimeout: 200,
  hAlign: 'left',
}

/* With state */
const DropdownCompose = compose(
  withToggle,
  withHandlers({
    handleClickOutside: ({ hide }) => event => {
      hide()
    },
  }),
  withKeydown({ keyCode: 27 }),
  onClickOutside,
)(Dropdown)

export default DropdownCompose
export { DropdownCompose as Dropdown }

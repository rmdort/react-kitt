import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import { menuItemClassName, menuItemInteractiveClassName } from './../../settings'

const MenuItem = (props) => {
  let { label, href, children, onClick, active, className, ...rest } = props
  /* Check if interactive */
  const isInteractive = onClick || href
  /* Add className */
  const classes = cx(menuItemClassName, {
    [`${menuItemInteractiveClassName}`]: isInteractive,
    [`${menuItemClassName}-active`]: active
  }, className)

  const tagName = !isInteractive
    ? 'div'
    : href
      ? 'a'
      : 'button'

  return (
    React.createElement(tagName, {
      className: classes,
      href: href,
      ...rest
    }, children || label)
  )
}

MenuItem.propTypes = {
  /**
   * Label of the button
   */
  label: PropTypes.string,
  children: PropTypes.any,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

MenuItem.defaultProps = {
  label: null,
  children: null,
  active: false,
  onClick: null
}

export { MenuItem }
export default MenuItem

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import { buttonClassName } from './../../settings'

/**
 * Buttons trigger actions when clicked
 */
const Button = (props) => {
  let { label, href, type, children, className, primary, secondary, ...rest } = props
  /* Add className */
  const classes = cx(buttonClassName, {
    [`${buttonClassName}-primary`]: primary,
    [`${buttonClassName}-secondary`]: secondary
  }, `${buttonClassName}-${type}`, className)

  const tagName = href
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

Button.propTypes = {
  /**
   * Label of the button
   */
  label: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.oneOf(['small', 'normal', 'large'])
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  type: 'normal'
}

export { Button }
export default Button

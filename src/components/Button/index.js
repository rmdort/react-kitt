import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import { buttonClassName } from './../../settings'

/**
 * Buttons trigger actions when clicked
 */
const Button = (props) => {
  let { label, children, className, primary, secondary, ...rest } = props
  /* Add className */
  const classes = cx(buttonClassName, {
    [`${buttonClassName}-primary`]: primary,
    [`${buttonClassName}-secondary`]: secondary
  }, className)

  return (
    <button
      className={classes}
      {...rest}
    >
      {children || label}
    </button>
  )
}

Button.propTypes = {
  /**
   * Label of the button
   */
  label: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.any
}

Button.defaultProps = {
  primary: false,
  secondary: false
}

export { Button }
export default Button

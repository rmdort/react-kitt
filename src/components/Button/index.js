import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import { buttonClassName } from './../../settings'

/**
 * Buttons trigger actions when clicked
 */
const Button = (props) => {
  let { label, children, className, ...rest } = props
  /* Add className */
  const classes = cx(buttonClassName, className)

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
  children: PropTypes.any
}

export { Button }
export default Button

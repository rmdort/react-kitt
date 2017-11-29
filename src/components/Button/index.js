import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import { buttonClassName } from './../../settings'

/**
 * Buttons trigger actions when clicked
 */
function Button(props) {
  let {
    label,
    href,
    type,
    size,
    children,
    className,
    primary,
    secondary,
    outline,
    flat,
    ...rest
  } = props
  /* Add className */
  const classes = cx(
    buttonClassName,
    {
      [`${buttonClassName}-primary`]: primary,
      [`${buttonClassName}-secondary`]: secondary,
      [`${buttonClassName}-outline`]: outline,
      [`${buttonClassName}-flat`]: flat,
      [`${buttonClassName}-${type}`]: type,
    },
    `${buttonClassName}-${size}`,
    className
  )

  const tagName = href ? 'a' : 'button'

  return React.createElement(
    tagName,
    {
      className: classes,
      href,
      ...rest,
    },
    children || label
  )
}

Button.propTypes = {
  /**
   * Label of the button
   */
  label: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  flat: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.oneOf(['danger', 'success', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  outline: false,
  flat: false,
  size: 'normal',
  type: null,
}

export { Button }
export default Button

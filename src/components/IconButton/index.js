import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import Icon from './../Icon'
import { iconButtonClassName } from './../../settings'

/**
 * Buttons trigger actions when clicked
 */
const IconButton = (props) => {
  let { name, className, primary, secondary, ...rest } = props
  /* Add className */
  const classes = cx(iconButtonClassName, {
    [`${iconButtonClassName}-primary`]: primary,
    [`${iconButtonClassName}-secondary`]: secondary
  }, className)

  return (
    <button
      className={classes}
      {...rest}
    >
      <Icon name={name} />
    </button>
  )
}

IconButton.propTypes = {
  /**
   * Name of the icon
   */
  name: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
}

IconButton.defaultProps = {
  primary: false,
  secondary: false
}

export { IconButton }
export default IconButton

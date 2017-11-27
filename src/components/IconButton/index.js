import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import Icon from './../Icon'
import { iconButtonClassName } from './../../settings'
import Button from './../Button'

/**
 * Buttons trigger actions when clicked
 */
function IconButton (props) {
  let { name, className, ...rest } = props
  let classes = cx(className, iconButtonClassName)
  return (
    <Button className={classes} {...rest}>
      <Icon name={name} />
    </Button>
  )
}

IconButton.propTypes = {
  /* Name of the icon */
  name: PropTypes.string,
  className: PropTypes.string
}

IconButton.defaultProps = {
  name: null,
  className: null
}

export { IconButton }
export default IconButton

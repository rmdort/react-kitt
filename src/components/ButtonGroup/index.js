import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { buttonGroupClassName } from './../../settings'
import './style.scss'

/**
 * Button groups arrange multiple buttons in a horizontal or vertical group.
 */
function ButtonGroup({ children, className, ...rest }) {
  const classes = cx(buttonGroupClassName, className)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  /**
   * Classname of the button group
   */
  className: PropTypes.string,
}

export { ButtonGroup }
export default ButtonGroup

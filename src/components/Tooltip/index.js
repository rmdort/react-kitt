import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

/**
 * Render tooltips using `hint.css`
 *
 * https://github.com/chinchang/hint.css/
 */
const ToolTip = ({ className, children, label, position, type }) => {
  const classes = cx(`o-tooltip--${position}`, `o-tooltip--${type}`, className)
  return (
    <span className={classes} aria-label={label}>{children}</span>
  )
}

ToolTip.defaultProps = {
  position: 'top',
  type: null
}

ToolTip.propTypes = {
  position: PropTypes.oneOf([
    'bottom-right', 'bottom', 'bottom-left', 'right', 'top-right', 'top', 'top-left', 'left'
  ]),
  type: PropTypes.oneOf([
    'error', 'info', 'warning', 'success'
  ]),
  children: PropTypes.any
}

export { ToolTip }
export default ToolTip

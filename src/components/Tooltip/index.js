import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { tooltipClassName } from './../../settings'
import './style.scss'

/**
 * Render tooltips using `hint.css`
 *
 * https://github.com/chinchang/hint.css/
 */
function ToolTip({ className, children, label, position, type }) {
  const classes = cx(
    tooltipClassName,
    `${tooltipClassName}--${position}`,
    `${tooltipClassName}--${type}`,
    className
  )
  return (
    <button role="tooltip" type="button" className={classes} aria-label={label}>
      {children}
    </button>
  )
}

ToolTip.defaultProps = {
  position: 'top',
  type: null,
}

ToolTip.propTypes = {
  position: PropTypes.oneOf([
    'bottom-right',
    'bottom',
    'bottom-left',
    'right',
    'top-right',
    'top',
    'top-left',
    'left',
  ]),
  type: PropTypes.oneOf(['error', 'info', 'warning', 'success']),
  children: PropTypes.any,
}

export { ToolTip }
export default ToolTip

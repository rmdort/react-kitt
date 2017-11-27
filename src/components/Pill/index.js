import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { pillClassName, pillCloseClassName, pillButtonClassName } from './../../settings'
import './style.scss'

function Pill ({ children, closeLabel, className, onClick, onClose }) {
  const classes = cx(pillClassName, {
    [`${pillClassName}__interactive`]: onClick
  }, className)
  const tagName = onClick
    ? 'button'
    : 'div'
  return (
    <div className={classes}>
      {React.createElement(tagName, { className: pillButtonClassName}, children) }
      {onClose
        ? <button className={pillCloseClassName} onClick={onClose}><span>{closeLabel}</span></button>
        : null
      }
    </div>
  )
}

Pill.propTypes = {
  /**
   * Classname of the card
   */
  className: PropTypes.string,
  /**
   * Elevation of the card
   */
  zIndex: PropTypes.number,
  children: PropTypes.any
}

Pill.defaultProps = {
  closeLabel: 'close'
}

export { Pill }
export default Pill

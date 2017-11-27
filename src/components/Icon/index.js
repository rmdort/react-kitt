import React from 'react'
import cx from 'classnames'
import { iconBaseClass, iconClassName } from './../../settings'

function Icon ({ name, className }) {
  const classes = cx(iconBaseClass, iconClassName, className)
  return (
    <i className={classes}>{name}</i>
  )
}

export { Icon }
export default Icon

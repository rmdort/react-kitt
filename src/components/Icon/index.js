import React from 'react'
import cx from 'classnames'
import { iconClassName } from './../../settings'

const Icon = ({ name, className }) => {
  const classes = cx(iconClassName, className)
  return (
    <i className={classes}>{name}</i>
  )
}

export { Icon }
export default Icon

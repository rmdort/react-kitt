import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { menuClassName } from './../../settings'
import './style.scss'

function Menu({ children, className }) {
  const classes = cx(menuClassName, className)
  return <div className={classes}>{children}</div>
}

Menu.propTypes = {
  children: PropTypes.any,
}

export { Menu }
export default Menu

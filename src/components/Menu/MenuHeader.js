import React from 'react'
import cx from 'classnames'
import { menuItemClassName, menuHeaderClassName } from './../../settings'

function MenuHeader({ children }) {
  let classes = cx(menuItemClassName, menuHeaderClassName)
  return <div className={classes}>{children}</div>
}

export default MenuHeader

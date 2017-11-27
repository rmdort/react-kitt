import React from 'react'
import { tabPanelInnerClassName } from './../../settings'

function TabPanel ({ children, ...rest }) {
  return (
    <div className={tabPanelInnerClassName}>
      {typeof children === 'function'
        ? children({ ...rest })
        : children
      }
    </div>
  )
}

export default TabPanel

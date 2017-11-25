import React from 'react'

export const Row = ({ children }) => <div className='row'>{children}</div>
export const Col = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Row

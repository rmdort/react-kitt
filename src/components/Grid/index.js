import React from 'react'

export function Row({ children }) {
  return <div className="row">{children}</div>
}
export function Col({ children, className }) {
  return <div className={className}>{children}</div>
}

export default Row

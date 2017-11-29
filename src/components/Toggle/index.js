import React from 'react'
import PropTypes from 'prop-types'
import { toggleClassName } from './../../settings'
import withToggle from './../../decorators/withToggle'

function Toggle({ children, ...rest }) {
  return (
    <div className={toggleClassName}>
      {typeof children === 'function' ? children({ ...rest }) : children}
    </div>
  )
}

Toggle.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  hide: PropTypes.func,
  open: PropTypes.func,
}

const toggleWithDecorator = withToggle(Toggle)

export { toggleWithDecorator as Toggle }
export default toggleWithDecorator

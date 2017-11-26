import React from 'react'
import { withStateHandlers, compose } from 'recompose'

const withToggle = (WrappedComponent) => {
  return withStateHandlers(
    {
      isOpen: false
    },
    {
      toggle: ({ isOpen }) => (value) => ({ isOpen: !isOpen }),
      hide: ({ isOpen }) => (value) => ({ isOpen: false }),
      open: ({ isOpen }) => (value) => ({ isOpen: true })
    }
  )(WrappedComponent)
}

export default withToggle

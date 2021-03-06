import { withStateHandlers } from 'recompose'

const withToggle = WrappedComponent => {
  return withStateHandlers(({ isOpen }) => ({ isOpen }), {
    toggle: ({ isOpen }) => value => ({ isOpen: !isOpen }),
    hide: ({ isOpen }) => value => ({ isOpen: false }),
    open: ({ isOpen }) => value => ({ isOpen: true }),
  })(WrappedComponent)
}

export { withToggle }
export default withToggle

Add a toggle functionality to any component

```md
import withToggle from 'react-kitt/decorators/withToggle'

const MyComponent = ({
  isOpen,
  toggle,
  hide,
  open
}) => (
  <div>
    <Button onClick={toggle}>Open</Button>
    <Modal onRequestClose={hide} isOpen={isOpen}>
      I will be shown when the button is clicked
    </Modal>
  </div>
)

export default withToggle(MyComponent)
```
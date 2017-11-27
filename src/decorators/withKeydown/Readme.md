 Bind to keydown events easily

```md
import { withKeydown } from 'react-kitt'

const MyComponent = ({
  keyCode
}) => (
  <div>
    Key pressed - {keyCode}
  </div>
)

/* Bind to Escape key */
export default withKeydown({ keyCode: 27 })(MyComponent)
```

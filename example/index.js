import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Dropdown } from 'react-kitt'

import 'react-kitt/styles/main.scss'

ReactDOM.render(
  <div>
    <Button>asdasd</Button>

    <Dropdown label={<Button>Click to open dropdown</Button>} animation={false}>
      <a>Hello there</a>
    </Dropdown>
  </div>
  , document.getElementById('root')
)

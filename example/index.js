import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Dropdown, Menu, MenuItem, MenuDivider, withToggle } from 'react-kitt'

import 'react-kitt/lib/styles/main.scss'

const noop = () => {}

ReactDOM.render(
  <div>
    <Button>asdasd</Button>

    <Dropdown label={<Button>Click to open dropdown</Button>}>
      <Menu>
        <MenuItem label='View' onClick={noop} />
        <MenuItem label='Edit' onClick={noop} />
        <MenuDivider />
        <MenuItem label='Delete' onClick={noop} />
      </Menu>
    </Dropdown>
  </div>
  , document.getElementById('root')
)

Menu examples

```js
const { MenuDivider, MenuItem, MenuHeader } = require('./../');
<Menu>
  <MenuHeader>Menu header</MenuHeader>
  <MenuDivider />
  <MenuItem label='Menu item text only' />
  <MenuItem label='Menu item with href' href='http://www.google.com' />
  <MenuItem onClick={() => {}} label='Menu item 2' />

  <MenuHeader>Menu header</MenuHeader>
  <MenuDivider />
  <MenuItem label='Menu item text only' />
  <MenuItem label='Menu item with href' href='http://www.google.com' />
  <MenuItem onClick={() => {}} label='Menu item 2' />
</Menu>
```
Dropdown example

```js
<Dropdown label='Click to open dropdown'>
  <Menu>
    <a href='#'>Menu item 1</a>
    <a href='#'>Menu item 2</a>
    <a href='#'>Menu item 3</a>
  </Menu>
</Dropdown>
```

Without animation 

```js
<div>
  <Dropdown label={<Button>Click to open dropdown</Button>} animation={false}>
    <a>Hello there</a>
  </Dropdown>
  More text here
</div>
```

## Popover
Child functional components can access `props` of `Dropdown`
```js
<Dropdown label={<Button>Click to open popover</Button>}>
  {({ hide }) => {
    return (
      <Card zIndex={2} title='Header' footer={<Button onClick={hide}>Close</Button>}>
        Bacon ipsum dolor amet picanha pastrami boudin chicken doner. Meatloaf meatball tongue, pastrami t-bone shoulder alcatra chicken ball tip brisket venison rump flank.   
      </Card>
    )
  }}
</Dropdown>
```
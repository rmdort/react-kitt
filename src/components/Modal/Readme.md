Modal examples

```js
initialState = { isOpen: false};
<div>
  <Modal
    isOpen={state.isOpen}
    onRequestClose={() => setState({ isOpen: false })}
    title='Modal title'
    footer='Modal footer'
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </Modal>
  <Button onClick={() => setState({ isOpen: true })}>
    Open small modal
  </Button>
</div>
```

Large

```js
initialState = { isOpen: false};
<div>
  <Modal
    isOpen={state.isOpen}
    onRequestClose={() => setState({ isOpen: false })}
    title='Modal title'
    footer='Modal footer'
    type='large'
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </Modal>
  <Button onClick={() => setState({ isOpen: true })}>
    Open large modal
  </Button>
</div>
```
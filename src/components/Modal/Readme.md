Modal examples
Uses https://github.com/reactjs/react-modal

```js
initialState = { isOpen: false};
<div>
  <Modal
    isOpen={state.isOpen}
    onRequestClose={() => setState({ isOpen: false })}
    title='Modal title'
    footer='Modal footer'
    type='small'
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

Fullscreen

```js
initialState = { isOpen: false};
<div>
  <Modal
    fullScreen
    isOpen={state.isOpen}
    onRequestClose={() => setState({ isOpen: false })}
    title='Modal title'
    footer='Modal footer'
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </Modal>
  <Button onClick={() => setState({ isOpen: true })}>
    Open fullscreen modal
  </Button>
</div>
```

Confirm dialog

```js
initialState = { isOpen: false};
const close = () => setState({ isOpen: false });
const open = () => setState({ isOpen: true });
<div>
  <Modal
    isOpen={state.isOpen}
    onRequestClose={() => setState({ isOpen: false })}
    type='confirm'
    shouldCloseOnOverlayClick={false}
  >
    <p>Are you sure you want to delete ?</p>
    <Button onClick={close} size='small' type='danger' primary outline>Yes sure</Button>
    <Button onClick={close} size='small' flat>Nope, cancel</Button> 

  </Modal>
  <Button onClick={open}>
    Open confirm modal
  </Button>
</div>
```
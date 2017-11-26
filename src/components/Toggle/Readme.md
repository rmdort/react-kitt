Toggle example
```js
<Toggle>
  {({ isOpen, toggle }) => {
    return (
      <div>
        <Button onClick={toggle}>{isOpen ? 'Hide' : 'Show'} more info</Button>
        {isOpen
          ? <div>Here is more information</div>
          : null
        }
      </div>
    )
  }}
</Toggle>
```
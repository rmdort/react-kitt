Default card

```js
<Card>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
</Card>
```

Card with title and footer
```js
<Card
  title='Card title'
  footer={
    <div>
      <a href='#'>Cancel</a>
      <Button label='Save' />
    </div>
  }
  zIndex={3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
</Card>
````

Elevation

```js
<div>
  <Card zIndex={1}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </Card>

  <Card zIndex={2}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </Card>

  <Card zIndex={3}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </Card>

  <Card zIndex={4}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </Card>
</div>
```
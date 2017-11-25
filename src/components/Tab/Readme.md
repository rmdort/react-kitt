Tab example

```js
<Tab>
  <TabPanel title='Tab 1'>
    Tab 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </TabPanel>
  <TabPanel title='Tab 2'>
    Tab 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </TabPanel>
</Tab>
```

### Toggle

```js
<Tab toggle animation='o-slide'>
  <TabPanel title='Tab 1'>
    {({ handleClick }) => {
      return (
        <span>
          Tab 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
          <Button onClick={() => handleClick(0)}>Close</Button>
        </span>
      )
    }}    
  </TabPanel>
  <TabPanel title='Tab 2'>
    Tab 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </TabPanel>
</Tab>
```

### Accordion

```js
<Tab toggle showOne animation='o-slide'>
  <TabPanel title='Tab 1'>
    Tab 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </TabPanel>
  <TabPanel title='Tab 2'>
    Tab 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus et mauris, vitae dictum metus.
  </TabPanel>
</Tab>
```

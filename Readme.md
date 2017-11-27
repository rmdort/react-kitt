# React kitt

Super lightweight React User Inteface components to help you get started.

Documentation - https://rmdort.gitlab.io/react-kitt/

## How to use

### Install react-kitt using `yarn` or `npm`

```md
yarn add react-kitt
or
npm install react-kitt
```

### Include react-kitt styles
```md
import 'react-kitt/styles/main.scss'
```

### Import components from react-kitt

```md
import { Button, Dropdown, Menu, MenuItem, MenuDivider, withToggle } from 'react-kitt'
```

### Webpack configuration

To compile sass or css, you need to have `css-loader`, `style-loader`, `sass-loader` and `node-sass` installed.

````md
yarn add css-loader style-loader sass-loader node-sass --dev
````

Add this to your webpack config file

````md
{
  test: /(\.scss|\.css)$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
}
````

## Example project

We have include a demo webpack project in `example`folder
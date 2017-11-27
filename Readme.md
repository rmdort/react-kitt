# React kitt

Super lightweight React User Inteface components to help you get started. All components are very easy to customize using `sass`. You can also extends `react-kitt` to create own components for your brand.

Documentation - https://rmdort.gitlab.io/react-kitt/

### What is included

1. All React functional components
2. Customisable color theme
3. SASS files for all components
4. Material icons support
5. Full License to the owner
6. Lifetime support + Free future updates

### List of components
1. Alert
2. Button
3. Button Group
4. Cards
5. Dropdown and popovers
6. Flex based grid
7. Icon (material icons)
8. Icon buttons
9. Menu
10. Highly customisable Modal dialog
11. Pagination
12. Pills
13. Progress bars
14. Tabs, accordion and toggles
15. Toggle
16. Tooltip

## How to use

### Install react-kitt using `yarn` or `npm`

```md
yarn add react-kitt
or
npm install react-kitt
```

### Include react-kitt styles
```md
import 'react-kitt/lib/styles/main.scss'
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

### Example project

We have include a demo webpack project in `example` folder

#### React guidelines

https://github.com/airbnb/javascript/blob/master/react/README.md
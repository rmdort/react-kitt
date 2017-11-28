# React kitt

Super lightweight React User Inteface components to help you get started. All components are very easy to customize using `sass`. You can also extends `react-kitt` to create own components for your brand.

Documentation - https://rmdort.gitlab.io/react-kitt/

### What is included

1. React stateless functional components
2. Customisable color theme
3. SASS files for all components
4. Material icons support
5. Full License to the owner
6. Lifetime support + Free future updates

### List of components
1. [Alert](#alert)
2. [Button](#button)
3. [Button Group](#buttongroup)
4. [Cards](#card)
5. [Dropdown and popovers](#dropdown)
6. [Flex based grid](#row)
7. [Icon (material icons)](#icon)
8. [Icon buttons](#iconbutton)
9. [Menu](#menu)
10. [Highly customisable Modal dialog](#modal)
11. [Pagination](#pagination)
12. [Pills](#pill)
13. [Progress bars](#progress)
14. [Tabs, accordion and toggles](#tab)
15. [Toggle](#toggle)
16. [Tooltip](#tooltip)

## How to use


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
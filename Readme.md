# React kitt

Super lightweight React User Inteface components to help you get started. All components are very easy to customize using `sass`. You can also extends `react-kitt` to create own components for your brand.

Completely compatible with [Tailwind CSS](https://tailwindcss.com/) and Post CSS


* Github - https://github.com/rmdort/react-kitt
* Documentation - https://rmdort.github.io/react-kitt/

### What is included

1. React stateless functional components
2. Customisable color theme
3. SASS files for all components
4. Material icons support
5. MIT License

### List of components
1. [Alert](https://rmdort.github.io/react-kitt/#alert)
2. [Button](https://rmdort.github.io/react-kitt/#button)
3. [Button Group](https://rmdort.github.io/react-kitt/#buttongroup)
4. [Cards](https://rmdort.github.io/react-kitt/#card)
5. [Dropdown and popovers](https://rmdort.github.io/react-kitt/#dropdown)
6. [Flex based grid](https://rmdort.github.io/react-kitt/#row)
7. [Icon (material icons)](https://rmdort.github.io/react-kitt/#icon)
8. [Icon buttons](https://rmdort.github.io/react-kitt/#iconbutton)
9. [Menu](https://rmdort.github.io/react-kitt/#menu)
10. [Modal dialogs](https://rmdort.github.io/react-kitt/#modal)
11. [Pagination](https://rmdort.github.io/react-kitt/#pagination)
12. [Pills](https://rmdort.github.io/react-kitt/#pill)
13. [Progress bars](https://rmdort.github.io/react-kitt/#progress)
14. [Tabs, accordion and toggles](https://rmdort.github.io/react-kitt/#tab)
15. [Toggle](https://rmdort.github.io/react-kitt/#toggle)
16. [Tooltip](https://rmdort.github.io/react-kitt/#tooltip)

## How to use

Install react-kitt from npm

```md
yarn add react-kitt

or

npm install react-kit --save
```

### Include react-kitt styles
```md
import 'react-kitt/lib/styles/main.scss'
```

### Enable TailWind CSS

You can enable [Tailwind CSS](https://tailwindcss.com/) in `styles/main.scss` by uncommenting 

```md
@tailwind preflight;
@tailwind utilities;
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
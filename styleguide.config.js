var path = require('path')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')
var { version } = require('./package.json')

module.exports = {
  showUsage: true,
  // skipComponentsWithoutExample: true,
  title: `React Kitt - ${version}`,
  styleguideDir: 'docs',
  require: [
    path.resolve(__dirname, './setup.js'),
    path.join(__dirname, './src/styles/main.scss'),
    path.resolve(__dirname, './src/index.js')
  ],
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js')
    const name = dirname.split('/').slice(-1)[0]
    const componentName = upperFirst(camelCase(name))

    return 'import ' + componentName + ' from \'react-kitt/components/' + name + '\''
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?/,
          use: ['babel-loader'],
          exclude: /node_modules/,
          include: [
            path.join(__dirname, './'),
            path.join(__dirname, './../src')
          ]
        },
        {
          test: /(\.scss|\.css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
}

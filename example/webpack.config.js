var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-kitt': path.join(__dirname, './../src')
    },
    modules: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, './'),
          path.resolve(__dirname, './../src')
        ],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.scss|\.css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

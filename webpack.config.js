const webpack = require('webpack')
const { resolve } = require('path');

module.exports = {
  entry: 'library/bundle.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, "dist")
  },
  'plugins': [
    new webpack.optimize.UglifyJsPlugin
  ],
  watch: true,

};

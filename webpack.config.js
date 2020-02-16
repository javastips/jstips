const webpack = require('webpack')
const { resolve } = require('path');

module.exports = {
  mode: "development",
  entry: 'library/bundle.js',
  output: {
    path: resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'javastips.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  stats: {
    colors: true
  },
  resolve: {
    extensions: ["*",".js"]
  },
};

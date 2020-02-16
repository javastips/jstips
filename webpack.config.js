const webpack = require('webpack')
const { resolve } = require('path');

module.exports = {
  entry: 'library/bundle.js',
  output: {
    path: resolve(__dirname, "build"),
    filename: 'javastips.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        query: {
          presets: ['es2015']
        }
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

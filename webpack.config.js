const webpack = require('webpack')
const { resolve } = require('path');

module.exports = {
  mode: "development",
  entry: 'library/bundle.js',
  output: {
    path: resolve(__dirname, "dist"),
    filename: 'webpack-bundle.js',
  },
  resolve: {
    extensions: [".js"]
  },
};

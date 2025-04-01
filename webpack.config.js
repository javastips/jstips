const webpack = require('webpack')
const { resolve } = require('path');

module.exports = {
  mode: "development",
  entry: './library/bundle.ts',
  output: {
    path: resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'javastips.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
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
    extensions: ["*", ".ts", ".tsx", ".js"]
  },
};

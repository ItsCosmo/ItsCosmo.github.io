var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './index.js',
  output: { path: __dirname, filename: "bundle.js"},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    port: 3001,
    historyApiFallback: true
  }
};
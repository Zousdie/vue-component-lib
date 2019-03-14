/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const docsBase = require('./webpack.docs.base');

module.exports = merge(docsBase.default, {
  mode: 'development',

  output: {
    filename: '[name].js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    quiet: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: false,
    compress: true,
    publicPath: '/',
    overlay: {
      warnings: true,
      errors: true,
    },
    clientLogLevel: 'none',
  },
});

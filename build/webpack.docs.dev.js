/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const openInEditor = require('launch-editor-middleware');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const docsBase = require('./webpack.docs.base');

const devPort = 8099;

module.exports = merge(docsBase.default, {
  mode: 'development',

  output: {
    filename: '[name].js',
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`App running at: http://localhost:${devPort}/`],
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    host: '0.0.0.0',
    port: devPort,
    quiet: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: false,
    compress: true,
    publicPath: '/',
    overlay: {
      warnings: false,
      errors: true,
    },
    clientLogLevel: 'none',
    before (app) {
      app.use('/__open-in-editor', openInEditor());
    },
  },
});

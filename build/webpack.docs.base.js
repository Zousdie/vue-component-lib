/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const htmlPluginOptions = {
  template: 'docs/public/index.html',
  filename: 'index.html',
  templateParameters (compilation, assets, pluginOptions) {
    let stats;
    return Object.assign(
      {
        get webpack () {
          // eslint-disable-next-line no-return-assign
          return stats || (stats = compilation.getStats().toJson());
        },
        compilation,
        webpackConfig: compilation.options,
        htmlWebpackPlugin: {
          files: assets,
          options: pluginOptions,
        },
      },
      {
        BASE_URL: process.env.BASE_URL,
        NODE_ENV: process.env.NODE_ENV,
      },
    );
  },
};

exports.htmlPluginOptions = htmlPluginOptions;
exports.default = merge(baseConfig, {
  entry: {
    app: './docs/src/main.ts',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  resolve: {
    alias: {
      lib: path.join(__dirname, '../src'),
      '@': path.join(__dirname, '../docs/src'),
    },
  },

  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [{
      enforce: 'pre',
      test: /\.(js|mjs|jsx|ts|tsx|vue)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'eslint-loader',
        options: {
          extensions: [
            '.js',
            '.mjs',
            '.jsx',
            '.ts',
            '.tsx',
            '.vue',
          ],
          cache: true,
          emitWarning: true,
          emitError: false,
        },
      }],
    }],
  },

  plugins: [
    new HtmlWebpackPlugin(htmlPluginOptions),
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, '../docs/public'),
          to: path.resolve(__dirname, '../dist'),
          toType: 'dir',
        },
      ],
    ),
  ],
});

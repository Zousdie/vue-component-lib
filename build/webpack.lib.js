/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',

  entry: {
    lib: './esm/index.js',
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    library: 'lib',
    libraryTarget: 'umd',
    filename: '[name].min.js',
    umdNamedDefine: true,
    globalObject: 'this',
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
});

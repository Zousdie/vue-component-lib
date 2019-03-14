const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: path.resolve(__dirname, '..'),

  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.vue', '.json'],
  },

  performance: false,

  stats: {
    modules: false,
    children: false,
    version: false,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader'),
            },
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader'),
            },
          },
        ],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/babel-loader'),
            },
          },
          'babel-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        resolve: {
          extensions: ['.scss', '.sass'],
        },
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is build completed!'],
      },
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin(
      {
        'process.env.BASE_URL': '"/"',
      },
    ),
  ],
};

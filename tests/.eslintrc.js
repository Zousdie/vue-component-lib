const path = require('path');

module.exports = {
  env: {
    jest: true,
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve('build/webpack.docs.base.js'),
      },
    },
  },
};

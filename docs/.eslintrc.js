const path = require('path');

module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve('build/webpack.docs.base.js'),
      },
    },
  },
};

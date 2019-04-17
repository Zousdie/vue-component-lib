module.exports = (api) => {
  const isProd = process.env.NODE_ENV === 'production';
  const isTest = process.env.NODE_ENV === 'test';
  const isLib = process.env.BABEL_TARGET === 'lib';
  const isApp = process.env.BABEL_TARGET === 'app';

  api.cache.using(() => isProd && process.env.BABEL_TARGET);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: isLib,
          modules: isTest ? 'commonjs' : false,
          useBuiltIns: isProd && isApp ? 'usage' : false,
          corejs: isProd && isApp ? 2 : undefined,
        },
      ],
      '@vue/babel-preset-jsx',
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: isProd && isApp ? 2 : false,
          helpers: true,
          regenerator: true,
          useESModules: !isTest,
        },
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};

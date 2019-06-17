module.exports = (api) => {
  // const isTest = process.env.NODE_ENV === 'test';
  const isProd = process.env.NODE_ENV === 'production';

  api.cache.using(() => isProd);

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties',
  ];

  if (process.env.TARGET === 'component') {
    plugins.push([
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: true,
      },
    ]);
  }

  return {
    presets: [
      '@babel/preset-env',
      '@vue/babel-preset-jsx',
    ],
    plugins,
  };
};

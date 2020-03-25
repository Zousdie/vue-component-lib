module.exports = (api) => {
  if (api) api.cache(false);

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
        useESModules: process.env.BABEL_MODULE !== 'cjs' && process.env.NODE_ENV !== 'test',
      },
    ]);
  }

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
        },
      ],
      '@vue/babel-preset-jsx',
    ],
    plugins,
  };
};

const { NODE_ENV } = process.env;

module.exports = {
  root: true,

  extends: ['airbnb-base', 'plugin:vue/recommended'],

  plugins: ['@typescript-eslint'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },

  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true
  },

  globals: {
    window: false,
    document: false,
    navigator: false
  },

  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.mjs',
          '.jsx',
          '.ts',
          '.tsx',
          '.vue'
        ]
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },

  rules: {
    'no-console': NODE_ENV === 'production'
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',
    'no-debugger': NODE_ENV === 'production'
      ? 'error'
      : 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 120 }],
    'no-param-reassign': 'off',
    'func-names': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],
    'vue/html-closing-bracket-newline': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always'
        },
        svg: 'never',
        math: 'never'
      }
    ],
  }
}

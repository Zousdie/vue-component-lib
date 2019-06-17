module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.vue'
        ]
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 150 }],
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'strict': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }],
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

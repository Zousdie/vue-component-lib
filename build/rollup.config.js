import path from 'path';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import {
  isVue,
  generateModules,
} from './get-script-modules';

const srcPath = path.resolve(__dirname, '../src');
const esmOutDir = path.resolve(__dirname, '../esm');
const cjsOutDir = path.resolve(__dirname, '../lib');

const componentPlugin = [
  eslint({
    throwOnError: true,
    throwOnWarning: false,
    include: ['src/**'],
    exclude: [/\?rollup-plugin-vue=/],
  }),

  resolve(),

  commonjs({
    include: 'node_modules/**',
  }),

  vue({
    template: {
      isProduction: true,
      preserveWhitespace: false,
    },
  }),

  typescript({
    clean: true,
  }),

  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
];

const config = generateModules(srcPath).map(p => ({
  input: p,

  output: [
    {
      dir: path.dirname(p).replace(srcPath, esmOutDir),
      format: 'esm',
    },
    {
      dir: path.dirname(p).replace(srcPath, cjsOutDir),
      format: 'cjs',
      exports: 'named',
    },
  ],

  plugins: componentPlugin,

  external (id) {
    return !(/\?rollup-plugin-vue=/.test(id) || isVue(id));
  },
}));

export default config;

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'packages/index.ts',
  output: {
    file: 'lib/lib.min.js',
    format: 'umd',
    name: 'lib',
    exports: 'named',
    globals: {
      vue: 'Vue',
    },
  },
  external: ['vue'],
  plugins: [
    eslint({
      fix: true,
      throwOnError: true,
      throwOnWarning: false,
      include: ['packages/**'],
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
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    terser(),
  ],
};

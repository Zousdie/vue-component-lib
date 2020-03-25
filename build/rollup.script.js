import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';

const {
  isDir,
  isFile,
  isScript,
  isVue,
  isSpec,
} = require('./utils');

const generateModules = (p) => {
  const modules = [];
  if (isFile(p) && isScript(p) && !isSpec(p)) {
    modules.push(p);
  }
  if (isDir(p)) {
    fs.readdirSync(p).forEach((item) => {
      modules.push(...generateModules(path.resolve(p, item)));
    });
  }

  return modules;
};

const srcPath = path.resolve(__dirname, '../packages');
const esmOutDir = path.resolve(__dirname, '../esm');
const cjsOutDir = path.resolve(__dirname, '../lib');

const componentPlugin = [
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
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
];

export default generateModules(srcPath).map(p => ({
  input: p,
  output: process.env.BABEL_MODULE === 'cjs'
    ? {
      dir: path.dirname(p).replace(srcPath, cjsOutDir),
      format: 'cjs',
      exports: 'named',
    }
    : {
      dir: path.dirname(p).replace(srcPath, esmOutDir),
      format: 'esm',
    },
  external: id => !(/\?rollup-plugin-vue=/.test(id) || isVue(id)),
  plugins: componentPlugin,
}));

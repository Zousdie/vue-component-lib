/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs-extra');
const dependencyTree = require('dependency-tree');
const components = require('./get-components')();

const search = (dt, comDir, style) => {
  let dependentModules = [];

  Object.entries(dt).forEach(([key, val]) => {
    const temp = {};
    Object.entries(style).forEach(([k, v]) => {
      temp[k] = path.relative(
        path.join(comDir, 'style'),
        path.join(path.dirname(key), v),
      )
        .split(path.sep).join(path.posix.sep);
    });

    dependentModules.push(temp);
    dependentModules = dependentModules.concat(search(val, comDir, style));
  });

  return dependentModules;
};
const formatStyleContent = raw => raw.map(o => `import '${o}';`).join('\n');

const analysisDir = path.resolve(__dirname, '../esm/packages');
const outputDir = [
  path.resolve(__dirname, '../esm/packages'),
  path.resolve(__dirname, '../lib/packages'),
];

components.forEach((item) => {
  const comDir = path.resolve(analysisDir, item);
  const dt = dependencyTree({
    directory: analysisDir,
    filename: path.join(analysisDir, item, 'index.js'),
    filter: p => p.includes(analysisDir),
  });

  const deps = search(dt, comDir, {
    style: 'index.css',
    scss: 'index.scss',
  });

  const style = ['../../../base.css'].concat(deps.map(it => it.style));
  const scss = ['../../../base.scss'].concat(deps.map(it => it.scss));

  outputDir.forEach((p) => {
    fs.outputFileSync(path.join(p, item, 'style', 'index.js'), formatStyleContent(style));
    fs.outputFileSync(path.join(p, item, 'style', 'scss.js'), formatStyleContent(scss));
  });
});

// eslint-disable-next-line no-octal-escape
console.log('\033[42;30m DONE \033[40;32m build style entry completed...\033[0m');

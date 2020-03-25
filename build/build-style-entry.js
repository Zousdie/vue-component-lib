const path = require('path');
const fs = require('fs-extra');
const dependencyTree = require('dependency-tree');
const components = require('./utils').components();

const blackList = ['OnlyClient'];

const search = (dt, comDir, style) => {
  let dependentModules = [];

  Object.entries(dt).forEach(([key, val]) => {
    dependentModules = dependentModules.concat(search(val, comDir, style));

    if (!fs.existsSync(path.join(path.dirname(key), 'index.css'))) {
      return;
    }

    const temp = {};
    Object.entries(style).forEach(([k, v]) => {
      temp[k] = path.relative(
        path.join(comDir, 'style'),
        path.join(path.dirname(key), v),
      )
        .split(path.sep).join(path.posix.sep);
    });

    dependentModules.push(temp);
  });

  return dependentModules;
};

const analysisDir = path.resolve(__dirname, '../lib');
const analysisOutput = [{
  dir: path.resolve(__dirname, '../lib'),
  func: raw => raw.map(o => `require('${o}');`).join('\n'),
}, {
  dir: path.resolve(__dirname, '../esm'),
  func: raw => raw.map(o => `import '${o}';`).join('\n'),
}];

components.filter(i => !blackList.includes(i)).forEach((item) => {
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

  const style = ['../../base.css'].concat(deps.map(it => it.style)).filter((it, index, arr) => arr.indexOf(it) === index);
  const scss = ['../../base.scss'].concat(deps.map(it => it.scss)).filter((it, index, arr) => arr.indexOf(it) === index);

  analysisOutput.forEach((p) => {
    fs.outputFileSync(path.join(p.dir, item, 'style', 'index.js'), p.func(style));
    fs.outputFileSync(path.join(p.dir, item, 'style', 'scss.js'), p.func(scss));
  });
});

import fs from 'fs';
import path from 'path';

const exists = p => ((fs.existsSync || path.existsSync)(p));
const isDir = p => exists(p) && fs.statSync(p).isDirectory();
const isFile = p => exists(p) && fs.statSync(p).isFile();
const isScript = p => /\.(js|jsx|ts|tsx)$/.test(p);
const isVue = p => /\.(vue)$/.test(p);

function generateModules (p) {
  let modules = [];

  if (isDir(p)) {
    fs.readdirSync(p).forEach((item) => {
      modules = modules.concat(generateModules(path.resolve(p, item)));
    });
  }

  if (isFile(p) && isScript(p)) {
    modules.push(p);
  }

  return modules;
}

export {
  isScript,
  isVue,
  generateModules,
};

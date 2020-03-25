const path = require('path');
const fs = require('fs-extra');
const components = require('./utils').components();

const outPath = path.resolve(__dirname, '../packages');
const componentList = components.join(',\n  ');
const componentStyles = components.filter(item => fs.existsSync(path.join(outPath, item, 'index.scss')));
const styleVariables = fs.readdirSync(path.resolve(__dirname, '../packages/style/variable'))
  .filter(n => n !== '_index.scss' && /^_([\s\S]+?)\.scss$/.test(n))
  .map(n => /^_([\s\S]+?)\.scss$/.exec(n)[1]);


// packages/index.ts
const scriptContent = `// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue';
${components.map(item => `import ${item} from './${item}';`).join('\n')}

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const components = [
  ${componentList},
];

const install = (Vue: VueConstructor) => {
  components.forEach((component) => {
    Vue.use(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  ${componentList},
};

export default {
  install,
};
`;


// packages/style/variable/_index.scss
const styleVariableContent = `// This file is auto gererated by build/build-entry.js
${styleVariables.map(name => `@import "${name}";`).join('\n')}
`;


// packages/index.scss
const styleContent = `// This file is auto gererated by build/build-entry.js
@import "style/global";
@import "style/base";

${componentStyles.map(name => `@import "./${name}/index";`).join('\n')}
`;

fs.writeFileSync(outPath.concat('/index.ts'), scriptContent);
fs.writeFileSync(outPath.concat('/style/variable/_index.scss'), styleVariableContent);
fs.writeFileSync(outPath.concat('/index.scss'), styleContent);

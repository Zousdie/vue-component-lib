// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue';
import ByJs from './packages/by-js';
import ByTreeDep from './packages/by-tree-dep';
import ByTsx from './packages/by-tsx';
import Icon from './packages/icon';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const components = [
  ByJs,
  ByTreeDep,
  ByTsx,
  Icon,
];
const version = '0.1.0';

const install = (Vue: VueConstructor) => {
  components.forEach((component) => {
    Vue.use(component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ByJs,
  ByTreeDep,
  ByTsx,
  Icon,
};

export default {
  install,
  version,
};
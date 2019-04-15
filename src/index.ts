// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue';
import Icon from './packages/icon';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const components = [
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
  Icon,
};

export default {
  install,
  version,
};

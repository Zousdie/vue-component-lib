// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue';
import Icon from './Icon';
import Step from './Step';
import Steps from './Steps';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const components = [
  Icon,
  Step,
  Steps,
];
const version = '0.1.0';

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
  version,
  Icon,
  Step,
  Steps,
};

export default {
  install,
  version,
};

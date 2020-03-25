// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue';
import Col from './Col';
import Icon from './Icon';
import OnlyClient from './OnlyClient';
import Row from './Row';
import Step from './Step';
import Steps from './Steps';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const components = [
  Col,
  Icon,
  OnlyClient,
  Row,
  Step,
  Steps,
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
  Col,
  Icon,
  OnlyClient,
  Row,
  Step,
  Steps,
};

export default {
  install,
};

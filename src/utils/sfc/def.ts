import { VueConstructor } from 'vue';
import Config from './config';

export default function def (name: string) {
  return function (
    component: VueConstructor,
    callback?: (vue: VueConstructor, component: SFCComponent, componentName: string) => void,
  ): SFCComponent {
    const sfcComponent = <SFCComponent>component;

    sfcComponent.install = (vue: VueConstructor) => {
      const componentName = `${Config.NAMESPACE}-${name}`;

      if (typeof callback === 'function') {
        callback(vue, sfcComponent, componentName);

        return;
      }

      vue.component(componentName, component);
    };

    return sfcComponent;
  };
}

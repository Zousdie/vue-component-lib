import Vue, { VueConstructor } from 'vue';
import {
  ThisTypedComponentOptionsWithArrayProps,
  ThisTypedComponentOptionsWithRecordProps,
  ComponentOptions,
  FunctionalComponentOptions,
  RecordPropsDefinition,
  DefaultData,
  DefaultMethods,
  DefaultComputed,
  PropsDefinition,
} from 'vue/types/options.d';

export default function def (name: string) {
  function defSFC<Data = object, Methods = object, Computed = object, PropNames extends string = never> (
    options: ThisTypedComponentOptionsWithArrayProps<Vue, Data, Methods, Computed, PropNames>,
    callback?: (
      vue: VueConstructor,
      component: VueConstructor<Data & Methods & Computed & Record<PropNames, any> & Vue>,
      componentName: string,
    ) => void,
  ): SFCComponent<Data & Methods & Computed & Record<PropNames, any> & Vue>;

  function defSFC<Data = object, Methods = object, Computed = object, Props = object> (
    options: ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>,
    callback?: (
      vue: VueConstructor,
      component: VueConstructor<Data & Methods & Computed & Props & Vue>,
      componentName: string,
    ) => void,
  ): SFCComponent<Data & Methods & Computed & Props & Vue>;

  function defSFC<PropNames extends string = never> (
    options: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>,
    callback?: (
      vue: VueConstructor,
      component: VueConstructor<Record<PropNames, any> & Vue>,
      componentName: string,
    ) => void,
  ): SFCComponent<Record<PropNames, any> & Vue>;

  function defSFC<Props = object> (
    options: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>,
    callback?: (
      vue: VueConstructor,
      component: VueConstructor<Props & Vue>,
      componentName: string,
    ) => void,
  ): SFCComponent<Props & Vue>;

  function defSFC (
    options: ComponentOptions<
      Vue,
      DefaultData<Vue>,
      DefaultMethods<Vue>,
      DefaultComputed,
      PropsDefinition<Record<string, any>>,
      Record<string, any>
    >,
    callback?: (
      vue: VueConstructor,
      component: VueConstructor<Vue>,
      componentName: string,
    ) => void,
  ): SFCComponent<Vue>;

  function defSFC (
    options: any,
    callback?: (
      vue: VueConstructor,
      component: VueConstructor<Vue>,
      componentName: string,
    ) => void,
  ): SFCComponent<Vue> {
    const component = Vue.extend({
      name,
      extends: options,
    }) as SFCComponent;

    component.install = (vue) => {
      vue.component(name, component);

      if (typeof callback === 'function') {
        callback(vue, component, name);
      }
    };

    return component;
  }

  return defSFC;
}

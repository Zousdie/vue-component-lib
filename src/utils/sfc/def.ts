import Vue, { VueConstructor } from 'vue';
import {
  ThisTypedComponentOptionsWithRecordProps,
  ComponentOptions,
  FunctionalComponentOptions,
  RecordPropsDefinition,
  DefaultData,
  DefaultMethods,
  DefaultComputed,
  PropsDefinition,
} from 'vue/types/options.d';
import TsxComponent from '../../../types/sfc.d';

type DefSfcCallback<T extends Vue = Vue> = (
  vue?: VueConstructor,
  component?: VueConstructor<T>,
  componentName?: string,
) => void;

export default function def<T extends ITsxComponentGeneric> (name: string) {
  function defSFC<Data = object, Methods = object, Computed = object, Props = T['Props']> (
    options: ThisTypedComponentOptionsWithRecordProps<TsxComponent<T>, Data, Methods, Computed, Props>,
    callback?: DefSfcCallback,
  ): SFCComponent<T, Data & Methods & Computed & Props & TsxComponent<T>>;

  function defSFC<Props = T['Props']> (
    options: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>,
    callback?: DefSfcCallback,
  ): SFCComponent<T, Props & TsxComponent<T>>;

  function defSFC (
    options: ComponentOptions<
      TsxComponent<T>,
      DefaultData<TsxComponent<T>>,
      DefaultMethods<TsxComponent<T>>,
      DefaultComputed,
      PropsDefinition<T['Props']>,
      T['Props']
    >,
    callback?: DefSfcCallback,
  ): SFCComponent<T>;

  function defSFC (
    options: any,
    callback?: DefSfcCallback,
  ): SFCComponent<T> {
    const component = Vue.extend({
      name,
      extends: options,
    }) as SFCComponent<T>;

    component.install = (vue: VueConstructor) => {
      vue.component(name, component);

      if (typeof callback === 'function') {
        callback(vue, component, name);
      }
    };

    return component;
  }

  return defSFC;
}

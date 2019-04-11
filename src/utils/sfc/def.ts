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
) => void

export default function def<P, E, S> (name: string) {
  function defSFC<Data = object, Methods = object, Computed = object, Props = P> (
    options: ThisTypedComponentOptionsWithRecordProps<TsxComponent<P & E & S>, Data, Methods, Computed, Props>,
    callback?: DefSfcCallback,
  ): SFCComponent<P & E & S, Data & Methods & Computed & Props & TsxComponent<P & E & S>>;

  function defSFC<Props = P> (
    options: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>,
    callback?: DefSfcCallback,
  ): SFCComponent<P & E & S, Props & TsxComponent<P & E & S>>;

  function defSFC (
    options: ComponentOptions<
      TsxComponent<P & E & S>,
      DefaultData<TsxComponent<P & E & S>>,
      DefaultMethods<TsxComponent<P & E & S>>,
      DefaultComputed,
      PropsDefinition<P>,
      P
    >,
    callback?: DefSfcCallback,
  ): SFCComponent<P & E & S>;

  function defSFC (
    options: any,
    callback?: DefSfcCallback,
  ): SFCComponent<P & E & S> {
    const component = Vue.extend({
      name,
      extends: options,
    }) as SFCComponent<P & E & S>;

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

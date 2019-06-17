import Vue, { VueConstructor, PluginFunction } from 'vue';
import { NormalizedScopedSlot } from 'vue/types/vnode.d';

declare global {
  type ScopedSlot = NormalizedScopedSlot | undefined;

  type TsxBaseProps<Slots> = {
    key?: string | number;
    ref?: string;
    slot?: string;
    refInFor?: boolean;
    props?: object;
    attrs?: object;
    domProps?: object;
    on?: object;
    nativeOn?: object;
    class?: string | string[] | object | object[];
    style?: string | object | object[];
    scopedSlots?: Partial<Slots>
    [key: string]: any;
  };

  interface ITsxComponentGeneric {
    Props?: object
    Events?: object
    Slots?: {
      [key: string]: ScopedSlot
    }
  }

  interface SFCComponent<
    T extends ITsxComponentGeneric,
    P extends TsxComponent<T> = TsxComponent<T>> extends VueConstructor<P> {
    install: PluginFunction<undefined>
  }
}

// hack for vue tsx
export default abstract class TsxComponent<T extends ITsxComponentGeneric> extends Vue {
  private vueTsxProps: Readonly<TsxBaseProps<T['Slots']>> & Readonly<T['Events'] & T['Props']>;

  readonly $scopedSlots: Readonly<T['Slots']> & {
    readonly [key: string]: NormalizedScopedSlot | undefined;
  };
}

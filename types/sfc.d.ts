import Vue, { VueConstructor, PluginFunction } from 'vue';

// hack for vue tsx
export default abstract class TsxComponent<P> extends Vue {
  private vueTsxProps: Readonly<{}> & Readonly<P>;
}

declare global {
  interface SFCComponent<P, T extends TsxComponent<P> = TsxComponent<P>> extends VueConstructor<T> {
    install: PluginFunction<undefined>
  }
}

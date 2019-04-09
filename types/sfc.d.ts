import Vue, { VueConstructor, PluginFunction } from 'vue';

declare global {
  interface SFCComponent<T extends Vue = Vue> extends VueConstructor<T> {
    install: PluginFunction<undefined>
  }
}

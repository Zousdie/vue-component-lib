import { VueConstructor, PluginObject } from 'vue';

declare global {
  type SFCComponent<T = undefined> = VueConstructor & PluginObject<T>
}

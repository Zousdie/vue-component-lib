import def from './def';
import bem from './bem';
import Config from './config';

export type TsxBaseProps<Slots> = {
  key?: string | number;
  // hack for jsx prop spread
  ref?: string;
  slot?: string;
  [key: string]: any
  props?: any;
  class?: any;
  style?: string | object[] | object;
  scopedSlots?: Slots;
};

export default function sfc<Props = Record<string, any>, Events = {}, Slots = {}> (name: string) {
  name = `${Config.NAMESPACE}-${name}`;

  return {
    def: def<Props, Events, TsxBaseProps<Slots>>(name),
    bem: bem(name),
  };
}

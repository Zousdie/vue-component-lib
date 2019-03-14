/**
 * bem helper
 * reference from https://github.com/youzan/vant/blob/dev/packages/utils/use/bem.ts
 */

import Config from './config';

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

function join (name: string, el?: string, sep?: string): string {
  return el ? name + sep + el : name;
}

function prefix (name: string, mods: Mods): Mods {
  if (typeof mods === 'string') {
    return join(name, mods, Config.MOD);
  }

  if (Array.isArray(mods)) {
    return mods.map(i => prefix(name, i));
  }

  const res: Mods = {};
  if (mods) {
    Object.keys(mods)
      .forEach((key) => {
        res[name + Config.MOD + key] = mods[key];
      });
  }

  return res;
}

export default function bem (name: string) {
  name = `${Config.NAMESPACE}-${name}`;

  return function (el?: Mods, mods?: Mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, Config.ELE);

    return mods ? [el, prefix(el, mods)] : el;
  };
}

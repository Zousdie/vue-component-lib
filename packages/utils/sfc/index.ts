import def from './def';
import bem from './bem';
import Config from './config';

export default function sfc<T extends ITsxComponentGeneric>(name: string) {
  name = `${Config.NAMESPACE}-${name}`;

  return {
    def: def<T>(name),
    bem: bem(name),
  };
}

import def from './def';
import bem from './bem';
import Config from './config';

export type SFCReturn = {
  def: ReturnType<typeof def>,
  bem: ReturnType<typeof bem>
}

export default function sfc (name: string): SFCReturn {
  name = `${Config.NAMESPACE}-${name}`;

  return {
    def: def(name),
    bem: bem(name),
  };
}

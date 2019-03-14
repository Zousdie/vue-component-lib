import def from './def';
import bem from './bem';

export type SFCReturn = {
  def: ReturnType<typeof def>,
  bem: ReturnType<typeof bem>
}

export default function sfc (name: string): SFCReturn {
  return {
    def: def(name),
    bem: bem(name),
  };
}

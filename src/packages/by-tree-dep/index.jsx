import ByJs from '../by-js';
import { sfc } from '../../utils';

const { def, bem } = sfc('by-tree-dep');

export default def({
  render () {
    return (
      <div class={bem()}>
        <ByJs />
      </div>
    );
  },
});

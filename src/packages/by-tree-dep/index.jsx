import byJs from '../by-js';
import { sfc } from '../../utils';

const { def, bem } = sfc('by-tree-dep');

export default def({
  components: {
    byJs,
  },

  render () {
    return (
      <div class={bem()}>
        <by-js />
      </div>
    );
  },
});

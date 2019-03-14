import icon from '../icon';
import { sfc } from '../../utils';

const { def, bem } = sfc('by-js');

export default def({
  components: {
    icon,
  },

  render () {
    return (
      <div class={bem()}>
        <icon name="test-icon" />
        THIS IS A TEST COMPONENT
      </div>
    );
  },
});

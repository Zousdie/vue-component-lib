import Icon from '../icon';
import { sfc } from '../../utils';

const { def, bem } = sfc('by-js');

export default def({
  render () {
    return (
      <div class={bem()}>
        <Icon name="test-icon" />
        THIS IS A TEST COMPONENT
      </div>
    );
  },
});

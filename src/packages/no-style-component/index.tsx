import Icon from '../icon';
import { sfc } from '../../utils';

const { def } = sfc('no-style-component');

export default def({
  functional: true,

  render () {
    return (
      <div>
        NO STYLE COMPONENT
        <Icon name='no-style' />
      </div>
    );
  },
});

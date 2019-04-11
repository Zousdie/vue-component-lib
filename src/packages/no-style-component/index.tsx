import Icon from '../icon';
import { sfc } from '../../utils';

const { def } = sfc('no-style-component');

export default def({
  functional: true,

  render () {
    return (
      <div id="n-s-c">
        NO STYLE COMPONENT
        <Icon
          id="n-s-c"
          rotate
          name='no-style'
          size={[20]}
          color="red"
        />
      </div>
    );
  },
});

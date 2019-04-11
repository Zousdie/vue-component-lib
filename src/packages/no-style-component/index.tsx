import Icon from '../icon';
import { sfc } from '../../utils';

export interface INoStyleComponent {
  Props: {},
  Events: {},
  Slots: {
    default: ScopedSlot
    s2: ScopedSlot
  }
}

const { def } = sfc<INoStyleComponent>('no-style-component');

export default def({
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
        <div style="color: red">
          {
            this.$scopedSlots.default
              ? this.$scopedSlots.default(undefined)
              : 'none default'
          }
        </div>
        {
          this.$scopedSlots.s2
            ? (
              <span>
                {this.$scopedSlots.s2(1)}
              </span>
            )
            : (
              <div style="color: blue">
                none s2
              </div>
            )
        }
      </div>
    );
  },
});

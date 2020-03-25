import Vue from 'vue';
import sfc from '../utils/sfc';

export interface IRowComponent {
  Props: {
    tag?: string
    gutter?: number
    flex?: boolean
  }
  Slots: {
    default: ScopedSlot
  }
}

export type RowStyles = {
  marginLeft?: string,
  marginRight?: string,
}

const { def, bem } = sfc<IRowComponent>('row');

export default def({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    flex: {
      type: Boolean,
      default: false,
    },
  },

  render(h) {
    const style: RowStyles = {};
    if (this.gutter > 0) {
      style.marginLeft = `-${this.gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }

    return h(this.tag, {
      class: bem({ flex: this.flex }),
      style,
    }, this.$slots.default);
  },
});

<template>
  <svg
    aria-hidden="true"
    :class="iconClass"
    :style="iconStyle"
  >
    <use :href="iconName"></use>
  </svg>
</template>

<script>
import { sfc } from '../../utils';

const { def, bem } = sfc('icon');

export default def({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: undefined,
    },
    size: {
      type: [String, () => Array],
      default: undefined,
    },
    rotate: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    iconName () {
      return `ba-${this.name}`;
    },

    iconClass () {
      return bem().concat(this.rotate ? ['is-rotate'] : []);
    },

    iconStyle () {
      const style = {
        color: this.color,
      };

      if (typeof this.size === 'string') {
        style['font-size'] = this.size;
      } else if (Object.prototype.toString.call(this.size) === '[object Array]' && this.size.length) {
        // eslint-disable-next-line prefer-destructuring
        style.width = this.size[0];
        style.height = this.size[1] || this.size[0];
      }

      return style;
    },
  },
});
</script>

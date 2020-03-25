import sfc from '../utils/sfc';

const { def, bem } = sfc('col');

export default def({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 12,
    },
    offset: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xll: [Number, Object],
  },

  render(h) {
    const classes = [bem()];

    const { gutter } = this.$parent;
    const pd = gutter ? `${gutter / 2}px` : null;

    ['span', 'offset'].forEach((prop) => {
      if (this[prop] || this[prop] === 0) {
        classes.push(
          prop !== 'span'
            ? `v-col-${prop}-${this[prop]}`
            : `v-col-${this[prop]}`,
        );
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl', 'xll'].forEach((size) => {
      const sz = this[size];
      if (typeof sz === 'number') {
        classes.push(`v-col-${size}-${sz}`);
      } else if (typeof sz === 'object') {
        const props = sz;
        Object.keys(props).forEach((prop) => {
          classes.push(
            prop !== 'span'
              ? `v-col-${size}-${prop}-${props[prop]}`
              : `v-col-${size}-${props[prop]}`,
          );
        });
      }
    });

    return h(this.tag, {
      class: classes,
      style: {
        paddingLeft: pd,
        paddingRight: pd,
      },
    }, this.$slots.default);
  },
});

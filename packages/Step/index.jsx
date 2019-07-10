import sfc from '../utils/sfc';

const { def, bem } = sfc('step');

const title = (h, t, slot) => <div class={bem('title')}>{t || slot()}</div>;
const description = (h, d, slot) => <div class={bem('description')}>{d || slot()}</div>;

export default def({
  props: {
    title: String,
    description: String,
  },

  data() {
    return {
      index: 0,
    };
  },

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  beforeDestroy() {
    const { steps } = this.$parent;
    const index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },

  render(h) {
    const { direction } = this.$parent;

    return (
      <div class={bem({ [direction]: true })}>
        <div class={bem('head')}>
          <span class={bem('head-inner')}>{this.index}</span>
        </div>
        <div class={bem('main')}>
          {(this.title || this.$scopedSlots.title) && title(h, this.title, this.$scopedSlots.title)}
          {(this.description || this.$scopedSlots.default) && description(h, this.description, this.$scopedSlots.default)}
        </div>
      </div>
    );
  },
});

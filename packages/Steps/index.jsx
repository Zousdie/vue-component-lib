import sfc from '../utils/sfc';
import DirectionOptions from './direction';

const { def, bem } = sfc('steps');

export default def({
  props: {
    direction: {
      type: String,
      default: DirectionOptions.auto,
      validator(value) {
        return !!DirectionOptions[value];
      },
    },
  },

  data() {
    return {
      steps: [],
    };
  },

  computed: {
    classes() {
      return bem({
        [this.direction]: true,
        'only-one': this.steps.length <= 1,
      });
    },
  },

  watch: {
    steps(to) {
      to.forEach((item, index) => {
        item.index = index + 1;
      });
    },
  },

  render() {
    return (
      <div class={this.classes}>
        {this.$scopedSlots.default && this.$scopedSlots.default()}
      </div>
    );
  },
});

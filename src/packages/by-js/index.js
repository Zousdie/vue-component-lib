import Icon from '../icon';
import { sfc } from '../../utils';

const { def, bem } = sfc('by-js');

export default def({
  data () {
    return {
      n: 1,
    };
  },

  methods: {
    onClick () {
      this.n += 1;
    },
  },

  render () {
    return (
      <div class={bem()}>
        <Icon name="test-icon" />
        THIS IS A TEST COMPONENT
        <div>
          Now: {this.n}
          <button onClick={this.onClick}>click</button>
        </div>
      </div>
    );
  },
});

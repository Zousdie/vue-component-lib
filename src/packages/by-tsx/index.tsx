import Vue from 'vue';
import { sfc } from '../../utils';

const { def, bem } = sfc('by-tsx');

export default def(Vue.extend({
  render () {
    return (
      <div class={bem()}>
        THIS IS A COMPONENT BY TSX
      </div>
    );
  },
}));

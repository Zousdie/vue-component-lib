import Vue from 'vue';
import Icon from '../icon';
import NoStyleComponent from '.';

export default Vue.extend({
  data () {
    return {
      text: '',
    };
  },

  render () {
    return (
      <NoStyleComponent
        nativeOn={{
          click: () => {
            console.log(this.text);
          },
        }}
        scopedSlots={{
          default: () => [<input type="text" vModel={this.text}></input>],
          s2: (scoop: any) => [<div><Icon name="t" />{scoop}: {this.text}</div>],
        }}
      />
    );
  },
});

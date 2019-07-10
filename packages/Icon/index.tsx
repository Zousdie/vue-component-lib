import sfc from '../utils/sfc';

export interface IIconComponent {
  Props: {
    name: string,
    color?: string,
    size?: string | number[] | string[],
    rotate?: boolean,
  }
  Events: {
    onClick?: (event: Event) => void;
  }
}

export type IconStyles = {
  color?: string,
  width?: string,
  height?: string,
  'font-size'?: string,
}

const convert = (x: number | string) => (typeof x === 'number' ? `${x}px` : x);

const { def, bem } = sfc<IIconComponent>('icon');

export default def({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: [String, Array as () => number[] | string[]],
    },
    rotate: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    styles() {
      const res: IconStyles = {
        color: this.color,
      };

      if (typeof this.size === 'string') {
        res['font-size'] = this.size;
      }

      if (Array.isArray(this.size) && this.size.length > 0) {
        [res.width, res.height = convert(this.size[0])] = (this.size as []).map(convert);
      }

      return res;
    },
  },

  render() {
    return (
      <svg
        aria-hidden="true"
        class={bem({ rotate: this.rotate })}
        style={this.styles}
        onClick={() => { this.$emit('click'); }}
      >
        <use xlinkHref={this.name}></use>
      </svg>
    );
  },
});

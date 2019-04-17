import { sfc } from '../../utils';

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

export type StyleType = {
  color?: string,
  width?: string,
  height?: string,
  'font-size'?: string,
}

const { def, bem } = sfc<IIconComponent>('icon');

const convert = (x: number | string) => (typeof x === 'number' ? `${x}px` : x);

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

  render () {
    const classes = (this.rotate ? ['is-rotate'] : []).concat(bem() as string);

    const styles: StyleType = {
      color: this.color,
    };

    if (typeof this.size === 'string') {
      styles['font-size'] = this.size;
    }
    if (Array.isArray(this.size) && this.size.length > 0) {
      [styles.width, styles.height = convert(this.size[0])] = (this.size as []).map(convert);
    }

    return (
      <svg
        aria-hidden="true"
        class={classes}
        style={styles}
        onClick={() => { this.$emit('click'); }}
      >
        <use href={this.name}></use>
      </svg>
    );
  },
});

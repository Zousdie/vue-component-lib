import { sfc } from '../../utils';

export type IconProps = {
  name: string,
  color?: string,
  size?: string | number[],
  rotate?: boolean,
}

export type IconEvents = {
  onClick?(event: Event): void;
}

type StyleType = {
  color: string,
  width?: number,
  height?: number,
  'font-size'?: string,
}

const { def, bem } = sfc<IconProps, IconEvents>('icon');

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
      type: [String, Array as () => number[]],
      default: undefined,
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
      [styles.width, styles.height = this.size[0]] = this.size;
    }

    return (
      <svg
        aria-hidden="true"
        class={classes}
        style={styles}
        onClick={() => { this.$emit('click'); }}
      >
        <use href={this.name}></use>
      </svg >
    );
  },
});

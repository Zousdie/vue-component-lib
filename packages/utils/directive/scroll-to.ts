import { VueConstructor } from 'vue';

const defaultArg = 'click';
const handleMap = new Map();
const genHandle = (value: Element | string) => () => {
  let target;

  if (value instanceof Element) target = value;

  else if (typeof value === 'string') {
    target = document.querySelector(value);
  }

  if (target) {
    const y = (target as HTMLElement).offsetTop;
    if (typeof window.scroll === 'function') {
      window.scroll(0, y);
    } else {
      document.documentElement.scrollTop = y;
      document.body.scrollTop = y;
    }
  }
};

let counter = 0;

const directive = {
  inserted(el: any, binding: any) {
    if (!binding) return;

    const { arg = defaultArg, value } = binding;

    if (!value) return;

    const handle = genHandle(value);

    handleMap.set(counter, handleMap);
    // eslint-disable-next-line no-plusplus
    el.dataset.scrollToHandleId = `${counter++}`;
    el.addEventListener(arg, handle);
  },

  unbind(el: any, binding: any) {
    if (!binding) return;

    const { arg = defaultArg, value } = binding;
    const handleId = el.dataset.scrollToHandleId;

    if (!handleId || !value || !handleMap.has(+handleId)) return;

    el.removeEventListener(arg, handleMap.get(+handleId));
    handleMap.delete(+handleId);
  },
};

export default directive;
export function install(vue: VueConstructor) {
  vue.directive('v-scroll-to', directive);
}

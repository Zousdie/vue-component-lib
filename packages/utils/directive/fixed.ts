import { VueConstructor } from 'vue';

const lock = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  document.body.style.cssText += `position:fixed;width:100%;top:-${scrollTop}px;`;
};

const loose = () => {
  const { body } = document;
  body.style.position = '';
  const top = -parseInt(body.style.top || '0', 10);
  document.body.scrollTop = top;
  document.documentElement.scrollTop = top;
  body.style.top = '';
  body.style.width = '';
};

const directive = {
  inserted(el: any, binding: any) {
    if (binding.value !== false) {
      lock();
    }
  },
  componentUpdated(el: any, binding: any) {
    if (binding.value !== false) {
      lock();
    } else {
      loose();
    }
  },
  unbind() {
    loose();
  },
};

export default directive;
export function install(vue: VueConstructor) {
  vue.directive('v-fixed', directive);
}

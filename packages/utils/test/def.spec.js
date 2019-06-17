import Vue from 'vue';
import { mount } from '@vue/test-utils';
import config from '../sfc/config';
import sfc from '../sfc';

const name = 'button';
const { def } = sfc(name);

describe('sfc def', () => {
  const com = def({
    render(h) {
      return h('div');
    },
  });
  const comFunc = def({
    functional: true,
    render(h) {
      return h('div');
    },
  });

  it('is a plugin object', () => {
    expect(typeof com.install).toEqual('function');
    expect(typeof comFunc.install).toEqual('function');
  });

  it('has correct component name', () => {
    const wrapper = mount(com);
    expect(wrapper.name()).toEqual(`${config.NAMESPACE}-${name}`);
  });

  it('is a functional component', () => {
    const wrapper = mount(comFunc);
    expect(wrapper.isFunctionalComponent).toBeTruthy();
  });

  it('def run a callback', () => {
    const v = Vue.extend();
    v.use(def({}, (vue, c, n) => {
      vue.prototype.$test = n;
    }));
    expect(v.prototype.$test).toEqual(`${config.NAMESPACE}-${name}`);
  });

  it('def run not a callback', () => {
    const v = Vue.extend();
    v.use(def({}, undefined));
    expect(v.prototype.$test).toBeUndefined();
  });
});

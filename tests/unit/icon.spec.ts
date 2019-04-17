import { mount } from '@vue/test-utils';
import Icon from 'packages/icon';

const iconName = 'icon';

describe('Component Props', () => {
  it('render icon with icon name', () => {
    const wrapper = mount(Icon, {
      propsData: { name: iconName },
    });
    expect(wrapper.classes('lib-icon')).toBe(true);
    expect(wrapper.find('use').attributes('href')).toBe(iconName);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('render icon with rotate', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        rotate: true,
      },
    });
    expect(wrapper.classes()).toEqual(['is-rotate', 'lib-icon']);
  });

  it('render icon with color', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        color: 'red',
      },
    });
    expect(wrapper.element.style.color).toBe('red');
  });

  it('render icon with size: String', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: '16px',
      },
    });
    expect(wrapper.element.style.fontSize).toBe('16px');
  });

  it('render icon with size: Array<number>', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: [10],
      },
    });
    expect(wrapper.element.style.width).toBe('10px');
    expect(wrapper.element.style.height).toBe('10px');
  });

  it('render icon with size: Array<number> 2', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: [16, 20],
      },
    });

    expect(wrapper.element.style.width).toBe('16px');
    expect(wrapper.element.style.height).toBe('20px');
  });

  it('render icon with size: Array<string>', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: ['10vw', '5vh'],
      },
    });

    expect(wrapper.element.style.width).toBe('10vw');
    expect(wrapper.element.style.height).toBe('5vh');
  });
});

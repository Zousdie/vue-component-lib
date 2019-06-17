import { mount } from '@vue/test-utils';
import Icon from '..';

const iconName = 'icon';

describe('Component Icon', () => {
  it('props name', () => {
    const wrapper = mount(Icon, {
      propsData: { name: iconName },
    });
    expect(wrapper.classes('v-icon')).toBe(true);
    expect(wrapper.find('use').attributes('href')).toBe(iconName);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('props rotate', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        rotate: true,
      },
    });
    expect(wrapper.classes()).toEqual(['v-icon', 'v-icon--rotate']);
  });

  it('props color', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        color: 'red',
      },
    });
    expect(wrapper.element.style.color).toBe('red');
  });

  it('props size: String', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: '16px',
      },
    });
    expect(wrapper.element.style.fontSize).toBe('16px');
  });

  it('props size: Array<number>', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: [10],
      },
    });
    expect(wrapper.element.style.width).toBe('10px');
    expect(wrapper.element.style.height).toBe('10px');
  });

  it('props size: Array<number> 2', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: [16, 20],
      },
    });

    expect(wrapper.element.style.width).toBe('16px');
    expect(wrapper.element.style.height).toBe('20px');
  });

  it('props size: Array<string>', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: iconName,
        size: ['10vw', '5vh'],
      },
    });

    expect(wrapper.element.style.width).toBe('10vw');
    expect(wrapper.element.style.height).toBe('5vh');
  });

  it('click event', () => {
    const wrapper = mount(Icon, {
      propsData: { name: iconName },
    });
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});

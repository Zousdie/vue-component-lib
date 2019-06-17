import { mount } from '@vue/test-utils';
import DirectionOptions from '../direction';
import Steps from '..';
import Step from '../../Step';

describe('Component Steps', () => {
  it('default direction and empty slot', () => {
    const wrapper = mount(Steps);
    expect(wrapper.classes()).toContain('v-steps');
    expect(wrapper.classes()).toContain('v-steps--auto');
    expect(wrapper.classes()).toContain('v-steps--only-one');
    expect(wrapper.isEmpty()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('correct direction', () => {
    const wrapper = mount(Steps, {
      propsData: {
        direction: DirectionOptions.horizontal,
      },
    });
    expect(wrapper.classes()).toContain('v-steps');
    expect(wrapper.classes()).toContain(`v-steps--${DirectionOptions.horizontal}`);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('correct slot', () => {
    const wrapper = mount({
      components: {
        Steps,
        Step,
      },
      template: `
        <steps>
          <step title="1" description="description 1"></step>
          <step>
            <template v-slot:title>test</template>
            slot description test
          </step>
          <step></step>
        </steps>
      `,
    });
    expect(wrapper.element).toMatchSnapshot();

    const stepsIns = wrapper.find(Steps);
    expect(stepsIns.vm.steps.length).toBe(3);
    stepsIns.destroy();
    expect(stepsIns.vm.steps.length).toBe(0);
  });

  it('update step', () => {
    const wrapper = mount(Steps);
    expect(wrapper.vm.steps.length).toBe(0);

    const genItem = () => ({ index: 0 });

    wrapper.vm.steps.push(genItem());
    expect(wrapper.vm.steps.length).toBe(1);
    expect(wrapper.vm.steps[0].index).toBe(1);
    expect(wrapper.classes()).toContain('v-steps--only-one');

    wrapper.vm.steps.push(genItem());
    expect(wrapper.vm.steps.length).toBe(2);
    expect(wrapper.vm.steps[0].index).toBe(1);
    expect(wrapper.vm.steps[1].index).toBe(2);
    expect(wrapper.classes().includes('v-steps--only-one')).toBeFalsy();
  });
});

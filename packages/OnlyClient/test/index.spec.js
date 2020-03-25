import { mount } from '@vue/test-utils';
import OnlyClient from '..';

describe('Component OnlyClient', () => {
  it('render ssr', () => {
    const wrapper = mount({
      components: {
        OnlyClient,
      },
      template: `
        <div>
          <OnlyClient>
            only render on client
          </OnlyClient>
        </div>
      `,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('render placeholder', () => {
    const wrapper = mount({
      components: {
        OnlyClient,
      },
      template: `
        <div>
          <OnlyClient>
            only render on client1
            only render on client2
            <template v-slot:placeholder>
              ssr placeholder
            </template>
          </OnlyClient>
        </div>
      `,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

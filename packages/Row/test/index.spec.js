import { mount } from '@vue/test-utils';
import Row from '..';
import Col from '../../Col';

describe('Component render', () => {
  it('Snapshot', () => {
    const wrapper = mount({
      components: {
        Row,
        Col,
      },
      template: `
        <div>
          <Row :gutter="10">
            <Col>
              all col
            </Col>
          </Row>
          <Row>
            <Col :span="4">
              span 4
            </Col>
            <Col :span="4" :offset="6">
              span 4 and offset 6
            </Col>
          </Row>
          <Row>
            <Col :xll="4">
              xll 4
            </Col>
          </Row>
          <Row>
            <Col :xll="{span:4, offset: 2}">
              xll obj 4 and offset 2
            </Col>
            <Col :xll="{span:4, offset: 2}">
              xll obj 4 and offset 2
            </Col>
          </Row>
        </div>
      `,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('flex mode', () => {
    const wrapper = mount({
      components: {
        Row,
        Col,
      },
      template: `
        <Row flex>
          <Col>flex mode</Col>
        </Row>
      `,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

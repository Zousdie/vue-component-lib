import { KeyMap, ns } from '../../../tests/utils';
import sfc from '../sfc';
import config from '../sfc/config';

const name = 'button';
const { bem } = sfc(name);

describe('sfc bem', () => {
  it('block', () => {
    expect(bem()).toEqual(ns(name));
  });

  it('block__element', () => {
    expect(bem('element')).toEqual(ns(name, 'element'));
  });

  it('block--modify', () => {
    expect((<KeyMap>bem({ error: true })[1])[ns(name, undefined, 'error')]).toBeTruthy();
  });

  it('block__element--modify String', () => {
    const o = bem('element', 'error');
    expect(o).toContainEqual(ns(name, 'element'));
    expect(o).toContainEqual(ns(name, 'element', 'error'));
  });

  it('block__element--modify Array', () => {
    const o = bem('element', ['error']);
    expect(o).toContainEqual(ns(name, 'element'));
    expect(o).toContainEqual([ns(name, 'element', 'error')]);
  });

  it('block__element--modify Object', () => {
    const classes = bem('element', { error: true });
    const a = <KeyMap>classes[1];
    expect(classes).toContainEqual(ns(name, 'element'));
    expect(a[ns(name, 'element', 'error')]).toBeTruthy();
  });

  it('block--modify', () => {
    const a = bem(undefined, { error: true });
    expect(a).toContainEqual(ns(name));
    expect((a[1] as KeyMap)[ns(name, undefined, 'error')]).toBeTruthy();
  });
});

import Vue from 'vue';
import sfc from '../utils/sfc';

export interface IOnlyClientComponent {
  Slots: {
    default: ScopedSlot
    placeholder: ScopedSlot
  }
}

export interface OnlyClientParent extends Vue {
  $$isMounted?: boolean
}

export default sfc('only-client').def<IOnlyClientComponent>({
  functional: true,

  render(h, { parent, slots }) {
    const { default: slotsDefault, placeholder: slotsPlaceholder } = slots();

    if ((parent as OnlyClientParent).$$isMounted && slotsDefault) {
      return slotsDefault;
    }

    parent.$once('hook:mounted', () => {
      (parent as OnlyClientParent).$$isMounted = true;
      parent.$forceUpdate();
    });

    if (slotsPlaceholder) {
      return slotsPlaceholder;
    }

    return h();
  },
});

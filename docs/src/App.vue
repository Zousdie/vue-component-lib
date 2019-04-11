<template>
  <div id="app">
    VUE-COMPONENT-LIB 2
    <lib-no-style-component>
      <template>
        <div>default</div>
      </template>
      <template v-slot:s2>
        <div>s2</div>
      </template>
    </lib-no-style-component>
    <x />
  </div>
</template>

<script>
import x from 'lib/packages/no-style-component/x';

export default {
  components: {
    x,
  },
};
</script>

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
  </div>
</template>

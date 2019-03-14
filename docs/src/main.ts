import Vue from 'vue';
import lib from 'lib';
import 'lib/index.scss';
import App from './App.vue';

Vue.use(lib);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

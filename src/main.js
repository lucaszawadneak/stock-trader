import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/api';
import './plugins/toast';

Vue.config.productionTip = false;

Vue.filter('money', (value) => {
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(value);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

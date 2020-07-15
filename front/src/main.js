import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './directives/cpfCnpj';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
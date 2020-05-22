import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// css style
import './assets/scss/index.scss';

Vue.config.productionTip = false;


// Install BootstrapVue
Vue.use(BootstrapVue, IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

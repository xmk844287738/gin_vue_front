import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';

// css style
import './assets/scss/index.scss';

Vue.config.productionTip = false;


// Install BootstrapVue
Vue.use(BootstrapVue, IconsPlugin);

// 使用vuelidate 插件进行表单验证
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

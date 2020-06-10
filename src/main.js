import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import mavonEditor from 'mavon-editor'; // 使用Markdown
import App from './App.vue';
import router from './router';
import store from './store';

// css style
import './assets/scss/index.scss';
import 'mavon-editor/dist/css/index.css'; // 导入 mavonEditor 样式


Vue.config.productionTip = false;


// Install BootstrapVue
Vue.use(BootstrapVue, IconsPlugin);

// 使用vuelidate 插件进行表单验证
Vue.use(Vuelidate);

// 使用axios 与后端192.168.233.135:9000进行数据交互
Vue.use(Vueaxios, axios);

// 全局注册 mavon-editor
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

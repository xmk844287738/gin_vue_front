import Vue from 'vue';
import Vuex from 'vuex';
import storageService from '@/service/storageService';
// import userModule from '@/store/module/user';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 开启严格模式
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },
  mutations: {
    DEMO() {
      console.log('Global: 666');
    },
    SET_TOKEN(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);

      // 更新state
      state.token = token;
    },

    SET_USERINFO(state, userInfo) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo)); // 反序列化

      // 更新state
      state.userInfo = userInfo;
    },
  },
  actions: {
  },
  modules: {
  },
});

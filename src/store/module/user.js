import storageService from '@/service/storageService';


// const USER = {
//   namespaced: true,
//   state: {
//     token: storageService.get(storageService.USER_TOKEN),
//     userInfo: JSON.parse(storageService.get(storageService.USER_INFO)), // 序列化
//   },

//   // 定义方法
//   mutations: {
//     SET_TOKEN(state, token) {
//       console.log('SET_TOKEN');

//       // 更新本地缓存
//       storageService.set(storageService.USER_TOKEN, token);

//       // 更新state
//       state.token = token;
//     },

//     SET_USERINFO(state, userInfo) {
//       // 更新本地缓存
//       storageService.set(storageService.USER_INFO, JSON.stringify(userInfo)); // 反序列化

//       // 更新state
//       state.userInfo = userInfo;
//     },
//     DEMO() {
//       console.log('user:666');
//     },

//   },
//   actions: {
//     setToken({ commit }) {
//       commit('DEMO');
//     },
//   },
//   getters: {

//   },
// };


const state = {
  token: storageService.get(storageService.USER_TOKEN),
  userInfo: JSON.parse(storageService.get(storageService.USER_INFO)), // 序列化
};

// 定义方法
const mutations = {
  SET_TOKEN(token) {
    // 更新本地缓存
    storageService.set(storageService.USER_TOKEN, token);

    // 更新state
    state.token = token;
  },

  SET_USERINFO(userInfo) {
    // 更新本地缓存
    storageService.set(storageService.USER_INFO, JSON.stringify(userInfo)); // 反序列化

    // 更新state
    state.userInfo = userInfo;
  },
  DEMO() {
    console.log('user:666');
  },
};

export default {
  namespaced: true, // 开启名命空间
  state,
  mutations,
};

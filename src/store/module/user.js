import storageService from '@/service/storageService';
import userService from '@/service/userService';


const userModule = {
  namespaced: true, // 开启模块名命空间
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null, // 序列化
  },

  // 定义方法
  mutations: {
    SET_TOKEN(state, token) {
      // console.log('SET_TOKEN');

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
    register(context, { name, telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.register({ name, telephone, password }).then((res) => {
          // 设置用户token
          context.commit('SET_TOKEN', res.data.data.token);

          return userService.userInfo(); // 链式调用
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },

    login(context, { telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.login({ telephone, password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);

          return userService.userInfo(); // 链式调用
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    logout(context) { // 用户退出
      context.commit('SET_TOKEN', '');
      // 删除本地token缓存
      storageService.set(storageService.USER_TOKEN, '');
      context.commit('SET_USERINFO', '');
      // 删除本地userInfo缓存
      storageService.set(storageService.USER_INFO, '');
    },
  },
};


export default userModule;

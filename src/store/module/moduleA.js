const state = {
  flag: false,
};
const mutations = {
  changeFlag(state, payload) {
    state.flag = payload.params;
    console.log('moduleA');
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};

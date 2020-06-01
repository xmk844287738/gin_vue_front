const state = {
  flag: false,
};
const mutations = {
  changeFlag(state, payload) {
    state.flag = payload.params;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};

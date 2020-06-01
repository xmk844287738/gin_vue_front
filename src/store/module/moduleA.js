const state = {
  flag: false,
};
const mutations = {
  changeFlag(state, payload) {
    state.flag = payload.params;
    console.log('moduleA');
  },
};
const actions = {

};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

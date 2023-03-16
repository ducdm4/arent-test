export default {
  login({ commit, state }, payload) {
    const user = state.userPool.find(
      (x) => x.username === payload.username && x.password === payload.password
    );
    if (user) {
      commit("LOGIN", user);
      return true;
    } else {
      return false;
    }
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
};

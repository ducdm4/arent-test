export default {
  updateCurrentPath(state, path) {
    state.currentPath = path;
  },
  updateCurrentPageTitle(state, key) {
    state.currentPageTitle = key;
  },
  LOGIN(state, payload) {
    state.currentUserLogin = payload;
    localStorage.setItem("userLoggedIn", JSON.stringify(payload));
  },
  LOGOUT(state) {
    state.currentUserLogin = null;
    localStorage.setItem("userLoggedIn", "");
  },
};

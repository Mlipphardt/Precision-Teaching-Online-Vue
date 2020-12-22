import AuthAPI from "../../services/api/modules/auth";

const defaultState = () => {
  return {
    authenticated: false,
    user: false,
  };
};

const state = defaultState();

const getters = {
  getAuthenticated() {
    return state.authenticated;
  },
};

const mutations = {
  LOGIN_USER(state, user) {
    state.user = user;
    state.authenticated = true;
  },
  LOGOUT_USER(state) {
    state.user = false;
    state.authenticated = false;
  },
};

const actions = {
  registerUser({ commit }, user) {
    AuthAPI.postUser(user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  loginUser({ commit }, user) {
    AuthAPI.loginUser(user)
      .then((res) => {
        console.log(res);
        commit("LOGIN_USER", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  logoutUser({ commit }) {
    commit("LOGOUT_USER");
    this.$router.push("/");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

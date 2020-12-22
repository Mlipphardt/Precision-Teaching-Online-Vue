import AuthAPI from "../../services/api/modules/auth";

const defaultState = () => {
  return {};
};

const state = defaultState();

const getters = {};

const mutations = {};

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
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

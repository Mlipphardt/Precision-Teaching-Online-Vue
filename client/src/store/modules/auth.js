import AuthAPI from "../../services/api/modules/auth";
import router from "../../router/index";

const defaultState = () => {
  return {
    authenticated: false,
    user: false,
  };
};

const state = defaultState();

const getters = {
  getAuthenticated(state) {
    return state.authenticated;
  },
};

const mutations = {
  LOGIN_USER(state, user) {
    state.user = user;
    localStorage.setItem("user", user.token);
    state.authenticated = true;
  },
  LOGOUT_USER(state) {
    state.user = false;
    localStorage.removeItem("user");
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
    return new Promise((resolve, reject) => {
      if (
        user.email_address.indexOf(" ") > -1 ||
        user.email_address.indexOf(";") > -1
      ) {
        reject("Login error");
      }
      if (user.password.indexOf(" ") > -1 || user.password.indexOf(";") > -1) {
        reject("Login error");
      }
      AuthAPI.loginUser(user)
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            commit("LOGIN_USER", res.data);
            resolve(true);
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logoutUser({ commit }) {
    commit("LOGOUT_USER");
    router.push("/");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

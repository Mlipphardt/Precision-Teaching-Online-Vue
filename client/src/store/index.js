import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import client from "./modules/client";
import resource from "./modules/resource";
import trial from "./modules/trial";
import program from "./modules/program";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    client,
    trial,
    resource,
    program,
  },
  plugins: [createPersistedState()],
});

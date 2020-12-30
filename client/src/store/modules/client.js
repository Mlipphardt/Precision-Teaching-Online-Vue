import ClientAPI from "../../services/api/modules/clients";

const defaultState = () => {
  return {
    client: {},
  };
};

const state = defaultState();

const getters = {};

const mutations = {};

const actions = {
  createUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      ClientAPI.postClient(client)
        .then((res) => {
          console.log(res);
          alert("Client successfully created!");
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
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

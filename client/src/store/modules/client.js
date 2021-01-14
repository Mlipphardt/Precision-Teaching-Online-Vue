import ClientAPI from "../../services/api/modules/clients";

const defaultState = () => {
  return {
    client: {},
  };
};

const state = defaultState();

const getters = {
  getClient(state) {
    return state.client;
  },
};

const mutations = {
  SET_CLIENT(state, client) {
    state.client = client;
  },
};

const actions = {
  createClient({ commit }, client) {
    return new Promise((resolve, reject) => {
      ClientAPI.postClient(client)
        .then((res) => {
          console.log(res);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  getUserClients({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      ClientAPI.getClientsByUser(user_id)
        .then((res) => {
          console.log(res);
          console.log("Client lookup successful.");
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  setClient({ commit }, client) {
    console.log("Setting client...");
    commit("SET_CLIENT", client);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

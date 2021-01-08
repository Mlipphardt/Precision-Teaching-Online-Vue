import ResourceAPI from "../../services/api/modules/resources";

const defaultState = () => {
  return {
    resource: {},
  };
};

const state = defaultState();

const getters = {
  getResource(state) {
    return state.resource;
  },
};

const mutations = {
  SET_RESOURCE(state, resource) {
    state.resource = resource;
  },
};

const actions = {
  createResource({ commit }, resource) {
    return new Promise((resolve, reject) => {
      ResourceAPI.postResource(resource)
        .then((res) => {
          console.log(res);
          console.log("Resource successfully created!");
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  getProgramResources({ commit }, program_id) {
    return new Promise((resolve, reject) => {
      ResourceAPI.getResourcesByProgram(program_id)
        .then((res) => {
          console.log(res);
          console.log("Resource lookup successful.");
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  setResource({ commit }, resource) {
    console.log("Setting resource...");
    commit("SET_RESOURCE", resource);
  },
  deleteResourceByID({ commit }, resource_id) {
    console.log("Deleting resource...");
    return new Promise((resolve, reject) => {
      ResourceAPI.deleteResourceById(resource_id)
        .then((res) => {
          console.log(res);
          console.log("Resource deletion successful");
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

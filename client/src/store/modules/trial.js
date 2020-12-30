import TrialAPI from "../../services/api/modules/trials";

const defaultState = () => {
  return {
    trial: {},
  };
};

const state = defaultState();

const getters = {
  getTrial(state) {
    return state.trial;
  },
};

const mutations = {
  SET_CLIENT(state, trial) {
    state.trial = trial;
  },
};

const actions = {
  createClient({ commit }, trial) {
    return new Promise((resolve, reject) => {
      TrialAPI.postTrial(trial)
        .then((res) => {
          console.log(res);
          alert("Trial successfully created!");
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  getProgramTrials({ commit }, program_id) {
    return new Promise((resolve, reject) => {
      TrialAPI.getTrialsByProgram(program_id)
        .then((res) => {
          console.log(res);
          console.log("Trial lookup successful.");
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  getClientTrials({ commit }, client_id) {
    return new Promise((resolve, reject) => {
      TrialAPI.getTrialsByClient(client_id)
        .then((res) => {
          console.log(res);
          console.log("Trial lookup successful.");
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  setTrial({ commit }, trial) {
    console.log("Setting trial...");
    commit("SET_TRIAL", trial);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

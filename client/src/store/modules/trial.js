import TrialAPI from "../../services/api/modules/trials";

const defaultState = () => {
  return {
    trial: {},
    time: 0,
    savedTime: 0,
    timer: null,
  };
};

const state = defaultState();

const getters = {
  getTrial(state) {
    return state.trial;
  },
};

const mutations = {
  SET_TRIAL(state, trial) {
    state.trial = trial;
  },
  SET_TIME(state, time) {
    state.savedTime = parseInt(time);
    state.time = parseInt(time);
  },
  START_TIMER(state) {
    state.timer = setInterval(() => {
      console.log("Firing");
      if (state.time > 0) {
        console.log("firing here");
        state.time--;
      }
    }, 1000);
  },
  CLEAR_TIMER(state) {
    clearInterval(state.timer);
    state.time = state.savedTime;
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
  setTimer({ commit }, time) {
    console.log("Setting time...");
    commit("SET_TIME", time);
  },
  startTrial({ commit }, time) {
    console.log("Trial started, starting timer...");
    commit("START_TIMER");
  },
  clearTimer({ commit }) {
    console.log("Clearing timer...");
    commit("CLEAR_TIMER");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

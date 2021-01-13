import TrialAPI from "../../services/api/modules/trials";

const defaultState = () => {
  return {
    trial: {},
    time: 0,
    savedTime: 0,
    timer: null,
    trialFinishSwitch: false,
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
      if (state.time > 0) {
        state.time--;
      } else {
        clearInterval(state.timer);
        state.time = state.savedTime;
        state.trialFinishSwitch = !state.trialFinishSwitch;
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
  saveTrial({ commit }, trial) {
    console.log("Sending trial to server...");
    TrialAPI.postTrial(trial);
  },
  deleteTrialByID({ commit }, trial_id) {
    console.log("Deleting trial...");
    return new Promise((resolve, reject) => {
      TrialAPI.deleteTrialById(trial_id)
        .then((res) => {
          console.log(res);
          console.log("Trial deletion successful");
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

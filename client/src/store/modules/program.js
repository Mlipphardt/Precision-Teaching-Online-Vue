import ProgramAPI from "../../services/api/modules/programs";

const defaultState = () => {
  return {
    program: {},
  };
};

const state = defaultState();

const getters = {
  getProgram(state) {
    return state.program;
  },
};

const mutations = {
  SET_PROGRAM(state, program) {
    state.program = program;
  },
};

const actions = {
  createProgram({ commit }, program) {
    return new Promise((resolve, reject) => {
      ProgramAPI.postProgram(program)
        .then((res) => {
          console.log(res);
          alert("Program successfully created!");
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getClientPrograms({ commit }, client_id) {
    return new Promise((resolve, reject) => {
      ProgramAPI.getProgramsByClient(client_id)
        .then((res) => {
          console.log(res);
          console.log("Program lookup successful.");
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },
  setProgram({ commit }, program) {
    console.log("Setting program...");
    commit("SET_PROGRAM", program);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

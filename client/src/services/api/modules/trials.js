import api from "../api";

export default class TrialAPI {
  static routes = {
    trials: "/trials",
    byClient: "/trials-by-client",
    byProgram: "/trials-by-program",
    deleteByID: "/delete-trial-by-id",
  };

  static postTrial(trial) {
    return api.post(this.routes.trials, trial);
  }

  static getTrialsByClient(client_id) {
    return api.get(`${this.routes.byClient}/${client_id}`);
  }

  static getTrialsByProgram(program_id) {
    return api.get(`${this.routes.byProgram}/${program_id}`);
  }

  static deleteTrialById(trial_id) {
    return api.delete(`${this.routes.deleteByID}/${trial_id}`);
  }
}

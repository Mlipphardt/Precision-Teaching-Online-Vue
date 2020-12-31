import api from "../api";

export default class ProgramAPI {
  static routes = {
    programs: "/programs",
    byClient: "/programs-by-client",
  };

  static postProgram(program) {
    return api.post(this.routes.programs, program);
  }

  static getProgramsByClient(client_id) {
    return api.get(`${this.routes.byClient}/${client_id}`);
  }
}

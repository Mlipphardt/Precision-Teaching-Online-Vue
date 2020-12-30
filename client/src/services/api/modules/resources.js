import api from "../api";

export default class ResourceAPI {
  static routes = {
    resources: "/resources",
    byProgram: "/resources-by-program",
  };

  static postResource(resource) {
    return api.post(this.routes.resources, resource);
  }

  static getResourcesByProgram(program_id) {
    return api.get(`${this.routes.byProgram}/${program_id}`);
  }
}

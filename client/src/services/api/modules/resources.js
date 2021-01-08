import api from "../api";

export default class ResourceAPI {
  static routes = {
    resources: "/resources",
    byProgram: "/resources-by-program",
    deleteByID: "/delete-resource-by-id",
  };

  static postResource(resource) {
    console.log("res");
    return api.post(this.routes.resources, resource);
  }

  static getResourcesByProgram(program_id) {
    return api.get(`${this.routes.byProgram}/${program_id}`);
  }

  static deleteResourceById(resource_id) {
    return api.delete(`${this.routes.deleteByID}/${resource_id}`);
  }
}

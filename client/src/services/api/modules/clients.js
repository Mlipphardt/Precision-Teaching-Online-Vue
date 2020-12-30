import api from "../api";

export default class ClientAPI {
  static routes = {
    clients: "/clients",
    byUser: "/clients-by-user",
  };

  static postClient(client) {
    return api.post(this.routes.clients, client);
  }

  static getClientsByUser(user_id) {
    return api.get(`${this.routes.byUser}/${user_id}`);
  }
}

import api from "../api";

export default class AuthAPI {
  static routes = {
    register: "/register",
    login: "/login",
  };

  static postUser(user) {
    return api.post(this.routes.register, user);
  }

  static loginUser(user) {
    return api.post(this.routes.login, user);
  }
}

import api from "../api";

export default class AuthAPI {
  static routes = {
    register: "/regiser",
  };

  static postUser(user) {
    return api.post(this.routes.register, user);
  }
}

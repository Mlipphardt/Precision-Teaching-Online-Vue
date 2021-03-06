import Vue from "vue";
import VueRouter from "vue-router";

//Views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Clients from "../views/Clients.vue";
import Programs from "../views/Programs.vue";
import Trial from "../views/Trial.vue";
import ClientDetails from "../views/ClientDetails";
import Resources from "../views/Resources";
import Scores from "../views/Scores";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/programs",
    name: "Programs",
    component: Programs,
  },
  {
    path: "/trial",
    name: "Trial",
    component: Trial,
  },
  {
    path: "/client-details",
    name: "Client Details",
    component: ClientDetails,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/scores",
    name: "Scores",
    component: Scores,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

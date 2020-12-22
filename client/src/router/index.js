import Vue from 'vue'
import VueRouter from 'vue-router'

//Views
import Home from '../views/Home.vue';
import Login from "../views/Login.vue";
import Clients from "../views/Clients.vue";
import Programs from "../views/Programs.vue";
import Trial from "../views/Trial.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: "/programs",
    name: 'Programs',
    component: Programs
  },
  {
    path: "/trial",
    name: "Trial",
    component: Trial
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
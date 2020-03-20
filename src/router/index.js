import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lab from "../views/Lab.vue";
import Class from "../views/Class.vue";
import ClassPage from "../views/ClassName.vue";
import Link from "../views/Link.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/lab",
    name: "Lab",
    component: Lab
  },
  {
    path: "/class",
    name: "Class",
    component: Class
  },
  {
    path: "/class/:gistId",
    name: "ClassPage",
    component: ClassPage
  },
  {
    path: "/link",
    name: "Link",
    component: Link
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

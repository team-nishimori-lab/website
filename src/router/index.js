import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lab_Contents from "../views/Lab_Contents.vue";
import Lab_History from "../views/Lab_History.vue";
import Lab_Member from "../views/Lab_Member.vue";
import Class from "../views/Class.vue";
import ClassPage from "../views/ClassName.vue";
import Faq from "../views/Faq.vue";
import Link from "../views/Link.vue";
import Timer from "../views/Timer.vue";
import Error from "../views/Error.vue";
import Test from "../views/Test.vue";

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
    path: "/lab/contents",
    name: "Lab_Contents",
    component: Lab_Contents
  },
  {
    path: "/lab/history",
    name: "Lab_History",
    component: Lab_History
  },
  {
    path: "/lab/member",
    name: "Lab_Member",
    component: Lab_Member
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
    path: "/faq",
    name: "FAQ",
    component: Faq
  },
  {
    path: "/link",
    name: "Link",
    component: Link
  },
  {
    path: "/timer",
    name: "Timer",
    component: Timer
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});

export default router;

/* eslint-disable */

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import VueSmoothScroll from "vue2-smooth-scroll";
import Home from "../views/Home.vue";
import LabTheme from "../views/LabTheme.vue";
import LabHistory from "../views/LabHistory.vue";
import LabContents from "../views/LabContents.vue";
import LabActivity from "../views/LabActivity.vue";
import Class from "../views/Class.vue";
import ClassPage from "../views/ClassName.vue";
import Faq from "../views/Faq.vue";
import Link from "../views/Link.vue";
import Timer from "../views/Timer.vue";
import Error from "../views/Error.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSmoothScroll);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lab/theme",
    name: "LabTheme",
    component: LabTheme,
  },
  {
    path: "/lab/history",
    name: "LabHistory",
    component: LabHistory,
  },
  {
    path: "/lab/contents",
    name: "LabContents",
    component: LabContents,
  },
  {
    path: "/lab/activity",
    name: "LabActivity",
    component: LabActivity,
  },
  {
    path: "/class",
    name: "Class",
    component: Class,
  },
  {
    path: "/class/:gistId",
    name: "ClassPage",
    component: ClassPage,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: Faq,
  },
  {
    path: "/link",
    name: "Link",
    component: Link,
  },
  {
    path: "/timer",
    name: "Timer",
    component: Timer,
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
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
  routes,
});

export default router;

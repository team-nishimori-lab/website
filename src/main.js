import BootstrapVue from "bootstrap-vue";
import VueSmoothScroll from "vue2-smooth-scroll";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueSmoothScroll);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

import Vue from "vue";
import HF from "./HeaderFooter.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(HF)
});

import Vue from "vue";
Vue.config.devtools = true; // Added to enable vue devtools in Chrome
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

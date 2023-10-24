import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/assets/css/main.css";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Vue.config.productionTip = false;
Fancybox.bind('[data-fancybox="gallery"]', {});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

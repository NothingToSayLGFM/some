import Vue from "vue";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import router from "./router";
import store from "./store";
import FlagIcon from "vue-flag-icon";

import "./styles/style.scss";

Vue.config.productionTip = false;
Vue.use(FlagIcon);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

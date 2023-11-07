import "@/styles/style.scss";
import "@/plugins";
import "boxicons/css/boxicons.min.css";
import "animate.css";

import App from "@/App.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import ArchiveLayout from "@/layouts/ArchiveLayout.vue";
import RequestFactory from "@/api/RequestFactory";
import Vue from "vue";
import amplitude from "amplitude-js";
import axios from "axios";
import i18n from "@/lang";
import moment from "moment";
import router from "@/routers";
import store from "@/stores";
Vue.config.productionTip = false;

Vue.component("app-layout", AppLayout);
Vue.component("archive-layout", ArchiveLayout);
Vue.component("login-layout", LoginLayout);

Vue.prototype.$eventBus = new Vue();

Vue.prototype.moment = moment;
window.moment = moment;

Vue.prototype.$rf = new RequestFactory();
window.axios = axios;

amplitude.getInstance().init(import.meta.env.VITE_APP_AMPLITUDE_API_KEY);
window.amplitude = amplitude.getInstance();

const user = Vue.observable({ user: null });

Object.defineProperty(Vue.prototype, "$user", {
  get() {
    return user.user;
  },

  set(value) {
    user.user = value;
  },
});

const targetRoute = Vue.observable({ targetRoute: "" });

Object.defineProperty(Vue.prototype, "$targetRoute", {
  get() {
    return targetRoute.targetRoute;
  },

  set(value) {
    targetRoute.targetRoute = value;
  },
});

const lang = Vue.observable({ lang: false });

Object.defineProperty(Vue.prototype, "$lang", {
  get() {
    return lang.lang;
  },

  set(value) {
    lang.lang = value;
  },
});

Object.defineProperty(Vue.prototype, "$toast", {
  get() {
    return toast.toast;
  },

  set(value) {
    toast.toast = value;
  },
});

new Vue({
  i18n,
  store,
  router,
  created() {},
  render: (h) => h(App),
}).$mount("#app");

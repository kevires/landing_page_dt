import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/stores/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    meta: { layout: "app" },
    name: "404",
  },
  {
    path: "/landing_page_dt",
    name: "Home",
    meta: { layout: "app", public: true },
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "login", public: true },
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/archive",
    name: "Archive",
    meta: { layout: "archive", public: false },
    component: () => import("@/pages/Archive.vue"),
  },
  {
    path: "/archive/:index",
    name: "ArchiveDetail",
    meta: { layout: "archive", public: false },
    component: () => import("@/pages/ArchiveDetail.vue"),
  },
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else if (to.path !== from.path) {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
  // base: import.meta.env.VITE_APP_BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  // if (!to.meta.public) {
  //   if (!store.state.auth.token) {
  //     await store.dispatch("auth/getUserInfo");

  //     if (!store.state.auth.token) {
  //       return next({ name: "Login" });
  //     }
  //   }
  // }
  return next();
});

export default router;

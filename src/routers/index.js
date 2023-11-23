import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/stores/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    meta: { layout: 'app' },
    name: '404'
  },
  {
    path: '/landing_page_dt',
    name: 'Home',
    meta: { layout: 'app', public: true },
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/landing_page_dt/human_resource',
    name: 'HR',
    meta: { layout: 'app', public: true },
    component: () => import('@/pages/HR.vue')
  },
  {
    path: '/landing_page_dt/profile',
    name: 'Profile',
    meta: { layout: 'app', public: true },
    component: () => import('@/pages/Profile.vue')
  }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    } else if (to.path !== from.path) {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  // base: import.meta.env.VITE_APP_BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // if (!to.meta.public) {
  //   if (!store.state.auth.token) {
  //     await store.dispatch("auth/getUserInfo");

  //     if (!store.state.auth.token) {
  //       return next({ name: "Login" });
  //     }
  //   }
  // }
  return next()
})

export default router

/* eslint-disable import/no-cycle */
import Vue from "vue";
import Vuex from "vuex";
// Modules
import app from "./app";
import posts from "./posts";
import auth from "./auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    posts,
    auth,
  },
  strict: true,
});

export default store;

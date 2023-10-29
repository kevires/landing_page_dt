import Vue from "vue";
import appUtils from "../utils/appUtils";

export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: null,
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      try {
        const response = await Vue.prototype.$rf.getRequest("AuthRequest").me();
        const token = appUtils.getLocalToken();

        commit("setToken", token);
        commit("setUserInfo", response.data);

        appUtils.setLocalUser(response.data);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

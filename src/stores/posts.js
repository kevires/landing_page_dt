export default {
  namespaced: true,
  state: {
    posts: [],
    selectedPost: {},
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getSelectedPost(state) {
      return state.selectedPost;
    },
  },
  mutations: {
    SET_SELECTED_POST: (state, payload) => {
      state.selectedPost = payload;
    },
  },
  actions: {
    handleSelectedPost({ commit }, data) {
      commit("SET_SELECTED_POST", data);
    },
  },
};

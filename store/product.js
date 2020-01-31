export default {
  state: {
    courses: []
  },
  mutations: {
    SET_COURSES: (state, payload) => {
      state.courses = payload;
    }
  },
  actions: {
    async FETCH_COURSES({ commit }) {
      const response = await this.$axios.get("/api/v1/products");
      commit('SET_COURSES', response.data.data.products)
    }
  }
};

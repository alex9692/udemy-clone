export const state = () => {
  return {
    blog: null
  };
};

export const mutations = {
  SET_BLOG: (state, payload) => {
    state.blog = payload;
  }
};

export const actions = {
  async CREATE_BLOG({ commit }, payload) {
    const response = await this.$axios.post("/api/v1/blogs", { ...payload });
    const blog = response.data.data.blog;
    this.$router.push(`/instructor/blogs/${blog._id}/edit`);
  },
  async FETCH_BLOG({ commit }, payload) {
    const response = await this.$axios.get(`/api/v1/blogs/${payload}`);
    commit("SET_BLOG", response.data.data.blog);
  },
  async UPDATE_BLOG({ commit }, { payload, id }) {
    try {
      const response = await this.$axios.patch(`/api/v1/blogs/${id}`, {
        ...payload
      });
      commit("SET_BLOG", response.data.data.blog);
    } catch (error) {
      console.log(error.response);
    }
  }
};

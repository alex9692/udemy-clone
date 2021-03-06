export const state = () => {
  return {
    courses: null
  };
};

export const mutations = {
  SET_COURSES: (state, payload) => {
    state.courses = payload;
  }
};

export const actions = {
  async FETCH_COURSES({ commit }) {
    const response = await this.$axios.get("/api/v1/products");
    commit("SET_COURSES", response.data.data.products);
  }
};

export const getters = {
  isLoaded: state => {
    return !!state.courses;
  }
};

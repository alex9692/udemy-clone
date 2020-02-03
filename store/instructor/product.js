export const state = () => {
  return {
    courses: null
  };
};

export const mutations = {
  SET_COURSES: (state, payload) => {
    state.courses = payload;
  },
  ADD_COURSE: (state, payload) => {
    state.courses.unshift(payload);
  }
};

export const actions = {
  async FETCH_COURSES({ commit }) {
    const response = await this.$axios.get("/api/v1/products/myproducts");
    commit("SET_COURSES", response.data.data.products);
  },
  ADD_COURSE({ commit }, payload) {
    commit("ADD_COURSE", payload);
  }
};

export const getters = {
  isLoaded: state => {
    return !!state.courses;
  }
};

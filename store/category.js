export const state = () => {
  return {
    categories: []
  };
};

export const mutations = {
  SET_CATEGORIESLIST: (state, payload) => {
    state.categories = payload;
  }
};

export const actions = {
  async FETCH_CATEGORIES({ commit }) {
    const response = await this.$axios.get("/api/v1/categories");
    commit("SET_CATEGORIESLIST", response.data.data.categories);
  }
};

export const getters = {
  isEmpty(state) {
    return state.categories.length == 0;
  }
};

export const state = () => {
  return {
    page: 1,
    isDisabledPageOne: true,
    isDisabledPageTwo: true,
    title: "",
    category: ""
  };
};

export const mutations = {
  SET_PAGE: (state, payload) => {
    state.page = payload;
  },
  SET_ISDISABLEDPAGEONE: (state, payload) => {
    state.isDisabledPageOne = payload;
  },
  SET_ISDISABLEDPAGETWO: (state, payload) => {
    state.isDisabledPageTwo = payload;
  },
  SET_TITLE: (state, payload) => {
    state.title = payload;
  },
  SET_CATEGORY: (state, payload) => {
    state.category = payload;
  },
  SET_INITIALVAL: state => {
    state.page = 1;
    state.isDisabledPageOne = true;
    state.isDisabledPageTwo = true;
    state.title = "";
    state.category = "";
  }
};

export const actions = {
  CHANGE_PAGE({ commit }, payload) {
    commit("SET_PAGE", payload);
  },
  CHANGE_ISDISABLEDPAGEONE({ commit }, payload) {
    commit("SET_ISDISABLEDPAGEONE", payload);
  },
  CHANGE_ISDISABLEDPAGETWO({ commit }, payload) {
    commit("SET_ISDISABLEDPAGETWO", payload);
  },
  CHANGE_TITLE({ commit }, payload) {
    commit("SET_TITLE", payload);
  },
  CHANGE_CATEGORY({ commit }, payload) {
    commit("SET_CATEGORY", payload);
  },
  async CREATE_COURSE({
    state,
    rootState: {
      auth: { user }
    },
    dispatch
  }) {
    try {
      const response = await this.$axios.post("/api/v1/products", {
        title: state.title,
        category: state.category,
        user: user._id
      });
      dispatch("instructor/product/ADD_COURSE", response.data.data.product, {
        root: true
      });
      this.$router.push({
        path: "/instructor/courses"
      });
    } catch (error) {
      if (error.response.data.message.includes("slug")) {
        this.$toast.error(
          "There already exist a course with the same title! Please use a different one.",
          { duration: 6000 }
        );
      }
    }
  },
  RESET_CREATEPAGE({ commit }) {
    commit("SET_INITIALVAL");
  }
};

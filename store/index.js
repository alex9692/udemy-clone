export const state =() => {
  return {
    instructorMode: "normal"
  }
};
export const mutations = {
  inInstructorCoursePage: (state, payload) => {
    if (payload) {
      state.instructorMode = "course";
    } else {
      state.instructorMode = "normal";
    }
  },
  inInstructorCourseCreatePage: (state, payload) => {
    if (payload) {
      state.instructorMode = "create";
    } else {
      state.instructorMode = "normal";
    }
  }
};
export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch("auth/PERSIST_USER");
  },
  inInstructorCoursePage({ commit }, payload) {
    commit("inInstructorCoursePage", payload);
  },
  inInstructorCourseCreatePage({ commit }, payload) {
    commit("inInstructorCourseCreatePage", payload);
  }
};

// need to fix category
// update product after creating course

export const state = () => {
  return {
    instructorMode: "normal"
  };
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
  },
  inInstructorCourseManagePage: (state, payload) => {
    if (payload) {
      state.instructorMode = "manage";
    } else {
      state.instructorMode = "normal";
    }
  },
  inInstructorBlogsManagePage: (state, payload) => {
    if (payload) {
      state.instructorMode = "manageBlogs";
    } else {
      state.instructorMode = "normal";
    }
  },
  inInstructorBlogsEditorPage: (state, payload) => {
    if (payload) {
      state.instructorMode = "editor";
    } else {
      state.instructorMode = "normal";
    }
  },
  inInstructorBlogsEditingrPage: (state, payload) => {
    if (payload) {
      state.instructorMode = "editing";
    } else {
      state.instructorMode = "normal";
    }
  }
};
export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch("auth/PERSIST_USER");
    await dispatch("category/FETCH_CATEGORIES");
  },
  inInstructorCoursePage({ commit }, payload) {
    commit("inInstructorCoursePage", payload);
  },
  inInstructorCourseCreatePage({ commit }, payload) {
    commit("inInstructorCourseCreatePage", payload);
  },
  inInstructorCourseManagePage({ commit }, payload) {
    commit("inInstructorCourseManagePage", payload);
  },
  inInstructorBlogsManagePage({ commit }, payload) {
    commit("inInstructorBlogsManagePage", payload);
  },
  inInstructorBlogsEditorPage({ commit }, payload) {
    commit("inInstructorBlogsEditorPage", payload);
  },
  inInstructorBlogsEditingrPage({ commit }, payload) {
    commit("inInstructorBlogsEditingrPage", payload);
  }
};

// need to fix category
// update product after creating course

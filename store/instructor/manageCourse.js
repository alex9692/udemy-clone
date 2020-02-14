export const state = () => {
  return {
    mode: "",
    course: null,
    updatedCourseValues: {},
    allowSave: true
  };
};

export const mutations = {
  SET_MODE: (state, payload) => {
    state.mode = payload;
  },
  SET_COURSE: (state, payload) => {
    state.course = payload;
  },
  UPDATE_COURSE_VALUES: (state, payload) => {
    const updatedCourseValues = { ...state.updatedCourseValues, ...payload };
    state.updatedCourseValues = updatedCourseValues;
  },
  SET_ALLOWSAVE: (state, payload) => {
    state.allowSave = payload;
  },
  RESET_UPDATEDCOURSEVALUES: state => {
    state.updatedCourseValues = {};
  }
};

export const actions = {
  async FETCH_COURSE({ commit }, payload) {
    try {
      const response = await this.$axios.get(`/api/v1/products/${payload}`);
      commit("SET_COURSE", response.data.data.product);
    } catch (error) {
      console.log(error.response);
    }
  },
  UPDATE_COURSE_VALUES({ commit }, payload) {
    for (let key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key] = payload[key].filter(el => el.value.length > 0);
      }
    }
    commit("UPDATE_COURSE_VALUES", payload);
  },
  async UPDATE_COURSE({ commit, state }) {
    try {
      const response = await this.$axios.patch(
        `/api/v1/products/${state.course._id}`,
        { ...state.updatedCourseValues }
      );
      commit("SET_COURSE", response.data.data.product);
      commit("RESET_UPDATEDCOURSEVALUES");
      this.$toast.success("Course updated successfully", { duration: 3000 });
      console.log(response);
    } catch (error) {
      this.$toast.error(error.response.data.message, { duration: 3000 });
    }
  }
};

export const getters = {
  getWsl(state) {
    if (state.course.wsl.length) {
      return JSON.parse(JSON.stringify([...state.course.wsl]));
    }
    return [{ value: "" }];
  },
  getReq(state) {
    if (state.course.requirements.length) {
      return JSON.parse(JSON.stringify([...state.course.requirements]));
    }
    return [{ value: "" }];
  },
  getCourse(state) {
    return JSON.parse(JSON.stringify(state.course));
  },
  allowUpdate(state) {
    return state.allowSave && Object.keys(state.updatedCourseValues).length > 0;
  }
};

export default {
  state: {
    token: null,
    user: null,
    isAuth: false
  },
  mutations: {
    SET_USER_DETAILS: (state, payload) => {
      state.token = payload.token;
      state.user = payload.user;
    },
    SET_AUTH_STATE: (state, payload) => {
      state.isAuth = payload;
    }
  },
  actions: {
    async LOGIN_USER({ commit }, payload) {
      const response = await this.$axios.post("/api/v1/users/login", payload);
      commit("SET_USER_DETAILS", response.data.data);
      commit("SET_AUTH_STATE", true);
      this.$router.push({
        path: "/"
      });
    },
    LOGOUT_USER({ commit }) {
      commit("SET_USER_DETAILS", { token: null, user: null });
      commit("SET_AUTH_STATE", false);
      this.$router.push({
        path: "/"
      });
    },
    async REGISTER_USER({ commit }, payload) {
      const response = await this.$axios.post(
        "/api/v1/users/register",
        payload
      );
      console.log(response);
      this.$router.push({
        path: "/login"
      });
    }
  }
};

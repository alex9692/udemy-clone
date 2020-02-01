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
    async PERSIST_USER({ commit }) {
      try {
        const response = await this.$axios.get("/api/v1/users/me");
        commit("SET_USER_DETAILS", response.data.data);
        commit("SET_AUTH_STATE", true);
      } catch (error) {}
    },
    async LOGIN_USER({ commit }, payload) {
      try {
        const response = await this.$axios.post("/api/v1/users/login", payload);
        commit("SET_USER_DETAILS", response.data.data);
        commit("SET_AUTH_STATE", true);
        this.$router.push({
          path: "/"
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, { duration: 3000 });
      }
    },
    async LOGOUT_USER({ commit }) {
      await this.$axios.get("/api/v1/users/logout");
      commit("SET_USER_DETAILS", { token: null, user: null });
      commit("SET_AUTH_STATE", false);
      this.$router.push({
        path: "/login"
      });
    },
    async REGISTER_USER(_, payload) {
      try {
        const response = await this.$axios.post(
          "/api/v1/users/register",
          payload
        );
        console.log(response);
        this.$router.push({
          path: "/login"
        });
      } catch (error) {
        if(error.response.data.message.includes('email')) {
          this.$toast.error('Email already exist! Please use a different one.', { duration: 3000 });
        }
      }
    }
  },
  getters: {
    isAdmin: state => {
      return state.user && state.user.role === "admin";
    }
  }
};

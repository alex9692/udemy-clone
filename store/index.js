export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch("auth/PERSIST_USER");
  }
};

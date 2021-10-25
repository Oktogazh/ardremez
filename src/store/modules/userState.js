const userState = ({
  namespaced: true,
  state: {
    email: null,
    jwt: null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    connected: (state) => !!state.jwt,
  },
});

export default userState;

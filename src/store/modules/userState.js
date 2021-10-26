const userState = ({
  namespaced: true,
  state: {
    email: null,
    jwt: null,
  },
  mutations: {
  },
  actions: {
    login(context, { email, psw }) {
      console.log(email, psw);
    },
    signin(context, { email, psw, confirmPsw }) {
      console.log(email, psw, confirmPsw);
    },
  },
  modules: {
  },
  getters: {
    connected: (state) => !!state.jwt,
  },
});

export default userState;

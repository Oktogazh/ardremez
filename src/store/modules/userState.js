import axios from 'axios';

const userState = ({
  namespaced: true,
  state: {
    email: null,
    jwt: null,
  },
  mutations: {
  },
  actions: {
    login(context, { email, password }) {
      console.log(email, password);
      axios.post(`${context.rootState.api}/api/kevreañ`, { email, password })
        .then((res) => console.log(res.data));
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

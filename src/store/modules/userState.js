import axios from 'axios';

const userState = ({
  namespaced: true,
  state: {
    email: null,
    customerId: null,
    level: null,
    subscribed: null,
    jwt: null,
    verified: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      const updatedData = { ...state, ...data };
      state = updatedData; // eslint-disable-line no-param-reassign
      localStorage.setItem('userData', JSON.stringify(state));
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    },
  },
  actions: {
    login(context, { email, password }) {
      console.log(email, password);
      axios.post(`${context.rootState.api}/api/kevreañ`, { email, password })
        .then((res) => context.commit('SET_USER_DATA', {
          email: res.data.email,
          customerId: res.data.customerId,
          level: res.data.live,
          subscribed: res.data.sub,
          jwt: res.data.token,
          verified: res.data.verified,
        }));
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

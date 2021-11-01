import axios from 'axios';

const userState = ({
  namespaced: true,
  state: {
    email: null,
    customerId: null,
    level: null,
    subscriptionActive: false,
    jwt: null,
    verified: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      const keysToUpdate = Object.keys(data);
      keysToUpdate.forEach((key) => {
        state[key] = data[key];
      });
      localStorage.setItem('userData', JSON.stringify(state));
      axios.defaults.headers.common.Authorization = `Bearer ${data.jwt}`;
    },
  },
  actions: {
    deleteAccount({ dispatch, rootState }) {
      axios.delete(`${rootState.api}/api/kont`)
        .then(dispatch('logOut'))
        .catch((e) => console.error(e));
    },
    async logIn(context, { email, password }) {
      // TODO: 'api/login' instead, sending the jwt via the cookie protocol
      // because the audio api doesn't send the Auth header otherwise
      const loggedIn = await axios.post(`${context.rootState.api}/api/kevreañ`, { email, password })
        .then((res) => context.commit('SET_USER_DATA', {
          email: res.data.email,
          customerId: res.data.customerId,
          level: res.data.live,
          subscriptionActive: res.data.sub,
          jwt: res.data.token,
          verified: res.data.verified,
        }))
        .then(() => true)
        .catch(() => false);

      return loggedIn;
    },
    logOut({ commit }) {
      const emptyState = {
        email: null,
        customerId: null,
        level: null,
        subscriptionActive: false,
        jwt: null,
        verified: null,
      };

      commit('SET_USER_DATA', emptyState);
    },
    retrieveData({ commit }) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      commit('SET_USER_DATA', userData);
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

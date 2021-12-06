import axios from 'axios';

const userState = ({
  namespaced: true,
  state: {
    email: null,
    customerId: null,
    level: null,
    subscriptionActive: false,
    jwt: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      const keysToUpdate = Object.keys(data);
      keysToUpdate.forEach((key) => {
        state[key] = data[key];
      });
      localStorage.setItem('userData', JSON.stringify(state));
      if (state.jwt) axios.defaults.headers.common.Authorization = `Bearer ${data.jwt}`;
    },
  },
  actions: {
    deleteAccount({ dispatch, rootState }) {
      axios.delete(`${rootState.api}/api/kont`)
        .then(dispatch('logOut'))
        .catch((e) => console.error(e));
    },
    async logIn({ commit, rootState }, { email, password }) {
      // TODO: 'api/login' instead, sending the jwt via the cookie protocol
      // because the audio api doesn't send the Auth header otherwise
      const loggedIn = await axios.post(`${rootState.api}/api/kevreañ`, { email, password })
        .then((res) => commit('SET_USER_DATA', {
          email: res.data.email,
          customerId: res.data.customerId,
          level: res.data.live,
          subscriptionActive: res.data.sub,
          jwt: res.data.token,
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
        verified: false,
      };

      localStorage.clear();
      commit('SET_USER_DATA', emptyState);
    },
    retrieveData({ commit }) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      commit('SET_USER_DATA', userData);
    },
    async signin({ commit, rootState }, { email, password }) {
      const signed = await axios.post(`${rootState.api}/api/enrollañ`, { email, password })
        .then((res) => commit('SET_USER_DATA', {
          email: res.data.email,
          customerId: res.data.customerId,
          level: res.data.live,
          subscriptionActive: res.data.sub,
          jwt: res.data.token,
          verified: res.data.verified,
        }))
        .then(() => axios.post(`${rootState.api}/api/kas_kod_postel`))
        .then(() => true);
      return signed;
    },
    newVerificationEmail({ rootState }) {
      axios.post(`${rootState.api}/api/kas_kod_postel`);
    },
    async verifyEmail({ commit, rootState }, { email, code }) {
      let customerId = null;
      const verified = await axios.post(`${rootState.api}/api/gwiriekaat_ar_ger-kuzh`, { email, kod: code })
        .then((res) => res.data)
        .catch(() => {
          axios.post(`${rootState.api}/api/kas_kod_postel`);
          return false;
        });
      if (verified) {
        customerId = await axios.post(`${rootState.api}/api/customer`)
          .then((res) => res.data.id)
          .catch(() => null);
      }
      commit('SET_USER_DATA', { customerId });
      return (customerId !== null);
    },
  },
  modules: {
  },
  getters: {
    connected: (state) => !!state.jwt,
    verified: (state) => !!state.customerId,
  },
});

export default userState;

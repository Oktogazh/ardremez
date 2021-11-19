import axios from 'axios';

const userState = ({
  namespaced: true,
  state: {
    email: null,
    customerId: null,
    level: null,
    subscriptionActive: false,
    jwt: null,
    verified: false,
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
        verified: false,
      };

      commit('SET_USER_DATA', emptyState);
    },
    retrieveData({ commit }) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      commit('SET_USER_DATA', userData);
    },
    signin({ commit, rootState }, { email, password }) {
      axios.post(`${rootState.api}/api/enrollañ`, { email, password })
        .then((res) => commit('SET_USER_DATA', {
          email: res.data.email,
          customerId: res.data.customerId,
          level: res.data.live,
          subscriptionActive: res.data.sub,
          jwt: res.data.token,
          verified: res.data.verified,
        }))
        .then(() => axios.post(`${rootState.api}/api/kas_kod_postel`));
    },
    newVerificationEmail({ rootState }) {
      axios.post(`${rootState.api}/api/kas_kod_postel`);
    },
    async verifyEmail({ commit, rootState }, { email, code }) {
      const verified = await axios.post(`${rootState.api}/api/gwiriekaat_ar_ger-kuzh`, { email, kod: code })
        .then((res) => res.data)
        .catch(() => {
          axios.post(`${rootState.api}/api/kas_kod_postel`);
          return false;
        });
      commit('SET_USER_DATA', { verified });
      return verified;
    },
  },
  modules: {
  },
  getters: {
    connected: (state) => !!state.jwt,
  },
});

export default userState;

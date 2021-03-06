import axios from 'axios';

window.axios = axios;

const userState = ({
  namespaced: true,
  state: {
    email: '',
    emailCode: null,
    customerId: null,
    level: null,
    progress: [/* {
        seriesId: null,
        chapter: null,
      } */],
    subscriptionActive: false,
    subscriptions: [],
    jwt: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      const keysToUpdate = Object.keys(data);
      keysToUpdate.forEach((key) => {
        state[key] = data[key];
      });
      localStorage.setItem('userData', JSON.stringify(state));
      if (data.jwt) window.axios.defaults.headers.common.Authorization = `Bearer ${data.jwt}`;
    },
  },
  actions: {
    async deleteAccount({ dispatch, rootState }) {
      const deleted = await window.axios.delete(`${rootState.api}/api/kont`)
        .then(dispatch('logOut'))
        .then(() => true)
        .catch(() => false);
      return deleted;
    },
    async logIn({ commit, rootState }, { email, password }) {
      // TODO: 'api/login' instead, sending the jwt via the cookie protocol
      // because the audio api doesn't send the Auth header otherwise
      const loggedIn = await window.axios.post(`${rootState.api}/api/kevreañ`, { email, password })
        .then(({ data }) => commit('SET_USER_DATA', {
          email: data.email,
          customerId: data.customerId,
          progress: data.progress,
          subscriptionActive: data.sub,
          subscriptions: data.subscriptions,
          jwt: data.token,
        }))
        .then(() => true)
        .catch(() => false);

      return loggedIn;
    },
    logOut({ commit }) {
      const emptyState = {
        email: '',
        customerId: null,
        level: null,
        progress: [],
        subscriptionActive: false,
        subscriptions: [],
        jwt: null,
        verified: false,
      };

      localStorage.clear();
      commit('SET_USER_DATA', emptyState);
    },
    retrieveData({ commit }) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      // TODO: delete jwt if expired
      commit('SET_USER_DATA', userData);
    },
    async signin({ commit, dispatch, rootState }, { email, password }) {
      const signed = await window.axios.post(`${rootState.api}/api/enrollañ`, { email, password })
        .then(({ data }) => commit('SET_USER_DATA', { // TODO: when deployed, data instead
          email: data.email,
          customerId: data.customerId,
          progress: data.progress,
          subscriptionActive: data.sub,
          subscriptions: data.subscriptions,
          jwt: data.token,
          verified: data.verified,
        }))
        .then(dispatch('newVerificationEmail'))
        .then(() => true)
        .catch(() => false);
      return signed;
    },
    newVerificationEmail({ rootState, state }) {
      return window.axios
        .post(`${rootState.api}/api/send_email_verification_link`, { address: state.email });
    },
    async reinitializePsw({ commit, state, rootState }, password) {
      const { emailCode } = state;
      const success = await window.axios.post(`${rootState.api}/api/psw_reinitialization`,
        { emailCode, password })
        .then(({ data }) => commit('SET_USER_DATA', {
          email: data.email,
          customerId: data.customerId,
          progress: data.progress,
          subscriptionActive: data.sub,
          subscriptions: data.subscriptions,
          jwt: data.token,
          emailCode: null,
        }))
        .then(() => true)
        .catch(() => false);
      return success;
    },
    setUserData({ commit }, userData) {
      commit('SET_USER_DATA', userData);
      return true;
    },
    updateProgress({ commit, state }, newProgress) {
      const { progress } = state;
      const finder = (obj) => (obj.seriesId === newProgress.seriesId);
      const update = (obj) => {
        if (obj.series === progress.series) return newProgress;
        return obj;
      };
      const started = (progress.findIndex(finder) !== -1);
      const updatedProgress = started ? progress.map(update) : [newProgress, ...progress];

      commit('SET_USER_DATA', { progress: updatedProgress });
    },
    async updateState({ commit, rootState }) {
      const updatedUserData = await window.axios.post(`${rootState.api}/api/update_user_state`)
        .then((res) => res.data);

      commit('SET_USER_DATA', updatedUserData);
      return true;
    },
    updateSubscription({ commit, state }, { productId, status }) {
      // Firstly, update the progress array
      // Extract the series id from the product id
      const seriesId = `@${productId.substring('prod_'.length)}`;
      // Verifies if has done any progress on the series yet
      function hasStartedSeries(progressObj) {
        return progressObj.seriesId === seriesId;
      }
      const seriesNotStarted = (state.progress.findIndex(hasStartedSeries) === -1);

      const initialProg = { seriesId, chapter: 0 };
      const progress = (seriesNotStarted) ? [initialProg, ...state.progress] : state.progress;

      // Secondly, update the subscriptions array
      const previousSubs = state.subscriptions;
      // filter that will return false if any sub has the same product id
      // since we don't know which subscription is being updated,
      // and we just want to show the users which series they may access
      // this is just while waiting a BE resynchronization
      // during the next /api/update-user-state call
      const filter = (sub) => !(sub.productId === productId);
      const preservedSubs = previousSubs.filter(filter);
      const newSub = { productId, status };
      const subscriptions = [newSub, ...preservedSubs];

      const updatedUserData = { progress, subscriptions };
      commit('SET_USER_DATA', updatedUserData);
    },
    async verifyEmail({ commit, rootState, dispatch }, { address, code }) {
      const { customerId, msg } = await window.axios.post(`${rootState.api}/api/verify_email`, { address, code })
        .then(({ data }) => {
          commit('SET_USER_DATA', {
            email: data.email,
            customerId: data.customerId,
            progress: data.progress,
            subscriptions: data.subscriptions,
            jwt: data.token,
            emailCode: null,
          });
          return data;
        })
        .catch(() => {
          dispatch('newVerificationEmail');
          return false;
        });
      console.log(msg);
      return msg || !!customerId;
    },
  },
  modules: {
  },
  getters: {
    connected: ({ jwt }) => {
      if (jwt === null) return false;
      // Extract the expirency date from the jwt
      const payload = Buffer.from(jwt.split('.')[1], 'base64').toString();
      const { exp } = JSON.parse(payload);
      // now in 10 digits instead of 13
      const now = parseInt(Date.now() / 1000, 10);
      // Check if the jwt is still valid
      const jstStilValid = (exp > now);

      return jstStilValid;
    },
    verified: (state) => !!state.customerId,
  },
});

export default userState;

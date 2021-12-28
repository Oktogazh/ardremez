const appState = ({
  namespaced: true,
  state: {
    language: '',
    loading: false,
    title: '',
    subtitle: null,
    player: {
      playing: false,
    },
    loggingRequired: false,
    nextRoute: null,
    redirectRoute: '/',
  },
  mutations: {
    SET_APP_STATE(state, data) {
      const keysToUpdate = Object.keys(data);
      keysToUpdate.forEach((key) => {
        state[key] = data[key];
      });
    },
    SET_CHOSEN_LANGUAGE(state, language) {
      state.language = language;
    },
    SET_LOADING(state, { loading }) {
      state.loading = loading;
    },
    SET_LOGGING_STATE_AND_ROUTES(state, { logging, next, redirect }) {
      state.loggingRequired = logging;
      state.nextRoute = next;
      state.redirectRoute = redirect;
    },
    SET_NEXT_ROUTE(state, { next }) {
      state.nextRoute = next;
    },
    SET_PLAYING(state, { playing }) {
      state.player.playing = playing;
    },
  },
  actions: {
    logAndRoute({ commit, rootGetters }, { next, redirect, askAnyway }) {
      const logging = !rootGetters['user/connected'] || askAnyway;
      commit('SET_LOGGING_STATE_AND_ROUTES', { logging, next, redirect });
    },
    notLogging({ commit, dispatch }, { next }) {
      dispatch('user/setUserData', { emailCode: null }, { root: true })
        .then(commit('SET_LOGGING_STATE_AND_ROUTES', { logging: false, next, redirect: '/' }));
    },
    updateAppState({ commit, dispatch, rootGetters }, data) {
      const isLogged = rootGetters['user/connected'];
      if (isLogged) dispatch('user/updateState', null, { root: true });
      commit('SET_APP_STATE', data);
    },
  },
  modules: {
  },
});

export default appState;

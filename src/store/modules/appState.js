const appState = ({
  namespaced: true,
  state: {
    language: '',
    loading: false,
    title: 'Home',
    subtitle: null,
    player: {
      playing: false,
    },
    loggingRequired: false,
    nextRoute: null,
    redirectRoute: '/',
  },
  mutations: {
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
    SET_TITLES(state, { title, subtitle }) {
      state.title = title;
      state.subtitle = subtitle;
    },
  },
  actions: {
    logAndRoute({ commit, rootState }, { next, redirect }) {
      if (rootState.user.email && rootState.user.jwt) {
        return true;
      }
      commit('SET_LOGGING_STATE_AND_ROUTES', { logging: true, next, redirect });
      return false;
    },
    notLogging({ commit }) {
      commit('SET_LOGGING_STATE_AND_ROUTES', { logging: false, next: null, redirect: '/' });
    },
  },
  modules: {
  },
});

export default appState;

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
  },
  mutations: {
    SET_CHOSEN_LANGUAGE(state, language) {
      state.language = language;
    },
    SET_LOADING(state, { loading }) {
      state.loading = loading;
    },
    SET_LOGGING_AND_NEXT_ROUTE(state, { logging, next }) {
      state.loggingRequired = logging;
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
    logAndRoute({ commit, rootState }, next) {
      if (rootState.user.email && rootState.user.jwt) {
        return true;
      }
      commit('SET_LOGGING_AND_NEXT_ROUTE', { logging: true, next });
      return false;
    },
    loggedIn({ commit }) {
      commit('SET_LOGGING_AND_NEXT_ROUTE', { logging: false, next: null });
    },
  },
  modules: {
  },
});

export default appState;

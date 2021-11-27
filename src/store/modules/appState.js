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
  },
  mutations: {
    SET_CHOSEN_LANGUAGE(state, language) {
      state.language = language;
    },
    SET_LOADING(state, { loading }) {
      state.loading = loading;
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
  },
  modules: {
  },
});

export default appState;

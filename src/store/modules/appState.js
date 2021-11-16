const appState = ({
  namespaced: true,
  state: {
    language: '',
    title: 'Home',
    subtitle: null,
  },
  mutations: {
    SET_CHOSEN_LANGUAGE(state, language) {
      state.language = language;
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

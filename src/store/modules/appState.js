const appState = ({
  namespaced: true,
  state: {
    language: '',
    loading: false,
    title: 'Home',
    subtitle: null,
  },
  mutations: {
    SET_CHOSEN_LANGUAGE(state, language) {
      state.language = language;
    },
    SET_LOADING(state, { loading }) {
      state.loading = loading;
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

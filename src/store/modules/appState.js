const appState = ({
  namespaced: true,
  state: {
    language: '',
    title: 'Home',
    subtitle: '',
  },
  mutations: {
    SET_CHOSEN_LANGUAGE(state, language) {
      state.language = language;
    },
  },
  actions: {
  },
  modules: {
  },
});

export default appState;

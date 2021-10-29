const appState = ({
  namespaced: true,
  state: {
    language: '',
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

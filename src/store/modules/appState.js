const appState = ({
  state: {
    language: 'br',
  },
  mutations: {
    SET_CHOSEN_LANGUAGE(state, code) {
      state.language = code;
    },
  },
  actions: {
    changeLanguage({ commit }, code) {
      commit('SET_CHOSEN_LANGUAGE', code);
    },
  },
  modules: {
  },
});

export default appState;

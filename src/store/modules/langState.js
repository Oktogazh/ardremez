const lang = ({
  namespaced: true,
  state: {
    Access: 'Access',
    Connected: 'Connected',
    Log_Out: 'Log Out',
  },
  mutations: {
    SET_LANGUAGE(state, obj) {
      const phrases = Object.keys(obj);
      phrases.forEach((entry) => {
        state[entry] = obj[entry];
      });
    },
  },
  actions: {
    loadLanguage({ commit }) {
      const choosenLanguage = 'br';
      import(`@/assets/languages/${choosenLanguage}.js`)
        .then(({ default: obj }) => {
          commit('SET_LANGUAGE', obj);
        });
    },
  },
  modules: {
  },
});

export default lang;

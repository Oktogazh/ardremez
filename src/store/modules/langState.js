const lang = ({
  state: {
  },
  mutations: {
    SET_LANGUAGE(state, obj) {
      state = obj;
    }
  },
  actions: {
    loadLanguage({ commit, rootGetters }) {
      console.log('loading lang');
      let choosenLanguage = 'br';
      import(`@/assets/languages/${choosenLanguage}.js`)
        .then((obj) => {
          commit('SET_LANGUAGE', obj);
        });
    },
  },
  modules: {
  },
});

export default lang;

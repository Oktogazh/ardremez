const lang = ({
  namespaced: true,
  state: {
    Access: '',
    Breton: '',
    Connected: '',
    Confirm: '',
    Email: '',
    English: '',
    French: '',
    Log_In: '',
    Log_Out: '',
    Other_Languages: '',
    Password: '',
    Reinitialize_Password: '',
    Sign_In: '',
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
    loadLanguage({ commit, rootState }) {
      const { language } = rootState.app;
      import(`@/assets/languages/${language}.js`)
        .then(({ default: obj }) => {
          commit('SET_LANGUAGE', obj);
        });
    },
  },
  modules: {
  },
});

export default lang;

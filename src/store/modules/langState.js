const lang = ({
  namespaced: true,
  state: {
    Access: 'Access',
    Connected: 'Connected',
    Confirm: 'Confirm',
    Email: 'Email',
    Log_In: 'Log In',
    Log_Out: 'Log Out',
    Password: 'Password',
    Reinitialize_Password: 'Reinitialize Password',
    Sign_In: 'Sign In',
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

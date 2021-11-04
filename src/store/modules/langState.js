const lang = ({
  namespaced: true,
  state: {
    Access: '',
    Breton: '',
    Connected: '',
    Confirm: '',
    Delete_My_Account: '',
    Email: '',
    Email_successfully_verified: '',
    Email_Verification: '',
    English: '',
    Enter_Your_Code_Here: '',
    French: '',
    Home: '',
    Log_In: '',
    Log_Out: '',
    Manage_My_Account: '',
    minimum_length_required: '',
    must_unsubscibe_before_delete_account: '',
    My_Account: '',
    Not_the_same_psws: '',
    OK: '',
    Other_Languages: '',
    Password: '',
    Reinitialize_Password: '',
    Sign_In: '',
    Submit: '',
    Wrong_code_New_code_sent: '',
  },
  mutations: {
    SET_LANGUAGE(state, { obj }) {
      const phrases = Object.keys(obj);
      phrases.forEach((entry) => {
        state[entry] = obj[entry];
      });
    },
  },
  actions: {
    loadLanguage({ commit }, language) {
      import(`@/assets/languages/${language}.js`)
        .then(({ default: obj }) => {
          commit('SET_LANGUAGE', { obj });
        })
        // TODO: localStorage('languagePreference') read && write (here)
        .then(commit('app/SET_CHOSEN_LANGUAGE', language, { root: true }));
    },
  },
  modules: {
  },
});

export default lang;

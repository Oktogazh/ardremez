import { createStore } from 'vuex';
import appState from './modules/appState';
import lessonState from './modules/lessonState';
import userState from './modules/userState';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app: appState,
    lesson: lessonState,
    user: userState,
  },
});

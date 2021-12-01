import { createStore, createLogger } from 'vuex';
import appState from './modules/appState';
import langState from './modules/langState';
import lessonState from './modules/lessonState';
import payementState from './modules/paymentState';
import seriesState from './modules/seriesState';
import userState from './modules/userState';

export default createStore({
  state: {
    api: 'https://eienn.bzh',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app: appState,
    lang: langState,
    lesson: lessonState,
    payement: payementState,
    series: seriesState,
    user: userState,
  },
  plugins: [
    createLogger(),
  ],
});

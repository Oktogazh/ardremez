import { createStore, createLogger } from 'vuex';
import appState from './modules/appState';
import langState from './modules/langState';
import lessonState from './modules/lessonState';
import paymentState from './modules/paymentState';
import seriesState from './modules/seriesState';
import userState from './modules/userState';

export default createStore({
  state: {
    api: process.env.VUE_APP_API,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app: appState,
    lang: langState,
    lesson: lessonState,
    payment: paymentState,
    series: seriesState,
    user: userState,
  },
  plugins: [
    createLogger(),
  ],
});

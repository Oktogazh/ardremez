import { createStore, createLogger } from 'vuex';
import appState from './modules/appState';
import langState from './modules/langState';
import chapterState from './modules/chapterState';
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
    chapter: chapterState,
    payment: paymentState,
    series: seriesState,
    user: userState,
  },
  plugins: [
    createLogger(),
  ],
});

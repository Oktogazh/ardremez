import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
// not the best way, but necessary in order to access the 'user/connected' getter
// waiting for a better solution...
import store from '../store';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters['user/connected'];

  if (to.matched.some((record) => record.meta.requireAuth) && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;

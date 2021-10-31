import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
// not the best way, but necessary in order to access the 'user/connected' getter
// waiting for a better solution...
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/library',
    name: 'Library',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Library.vue'),
    meta: {
      requireAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (store.getters['user/connected']) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;

import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Account.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Read.vue'),
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Verify.vue'),
    meta: {
      unverifiedOnly: true,
    },
  },
];

export default routes;

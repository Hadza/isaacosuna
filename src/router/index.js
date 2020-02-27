import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    meta: {
      title: 'Isaac Osuna',
    },
    name: 'Home',
    component: Home,
  },
  {
    path: '/psychology',
    name: 'Psychology',
    meta: {
      title: 'Isaac Osuna - Psychology',
    },
    component: () => import(/* webpackChunkName: "psychology" */ '../views/Psychology.vue'),
  },
  {
    path: '/gastronomy',
    name: 'Gastronomy',
    meta: {
      title: 'Isaac Osuna - Gastronomy',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Gastronomy.vue'),
  },
  {
    path: '/software',
    name: 'Software',
    meta: {
      title: 'Isaac Osuna - Software Engineering',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Software.vue'),
  },
  {
    path: '/others',
    name: 'Others',
    meta: {
      title: 'Isaac Osuna - Others',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Others.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

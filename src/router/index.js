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
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    props: {
      topic: 'psychology',
    },
  },
  {
    path: '/gastronomy',
    name: 'Gastronomy',
    meta: {
      title: 'Isaac Osuna - Gastronomy',
    },
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    props: {
      topic: 'gastronomy',
    },
  },
  {
    path: '/software',
    name: 'Software',
    meta: {
      title: 'Isaac Osuna - Software Engineering',
    },
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    props: {
      topic: 'software',
    },
  },
  {
    path: '/others',
    name: 'Others',
    meta: {
      title: 'Isaac Osuna - Others',
    },
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    props: {
      topic: 'others',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;

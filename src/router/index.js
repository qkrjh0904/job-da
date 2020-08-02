import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default [
    {
        path: '/',
        component: () => import('@/views/starter'),
        name: 'starter',
    },
    {
        path: '/main',
        component: () => import('@/views/main'),
        name: 'main',
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
        name: 'login',
    },
];

import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue'),
      children: [
        {
          path: '/navIndex',
          name: 'mainContent',
          component: () => import('./views/mainContent/index.vue')
        },
        {
          path: '/goods/:id',
          name: 'mainContent',
          component: () => import('./views/mainContent/index.vue')
        },
        // {
        //   path: '/mac',
        //   name: 'mainContent',
        //   component: () => import('./views/mainContent/index.vue')
        // },
        // {
        //   path: '/ipad',
        //   name: 'mainContent',
        //   component: () => import('./views/mainContent/index.vue')
        // },
        // {
        //   path: '/iphone',
        //   name: 'mainContent',
        //   component: () => import('./views/mainContent/index.vue')
        // },
        // {
        //   path: '/airPods',
        //   name: 'mainContent',
        //   component: () => import('./views/mainContent/index.vue')
        // },
        // {
        //   path: '/watch',
        //   name: 'mainContent',
        //   component: () => import('./views/mainContent/index.vue')
        // },
      ]
    },
  ]
})

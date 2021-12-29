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
      component: () => import('./views/index.vue'),
      children: [
        {
          path: '/navIndex',
          name: 'indexPage',
          component: () => import('./views/indexPage/index.vue')
        },
        {
          path: '/goods/:id',
          name: 'goodsSaleParent',
          component: () => import('./components/goodsSaleParent.vue')
        },
        {
          path: '/storeStock/stock',
          name: 'stock',
          component: () => import('./views/goodsStock/index.vue')
        }
      ]
    },
  ]
})

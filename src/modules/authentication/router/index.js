import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView  from '../views/HomeView.vue'

import AuthLayout from '../layouts/AuthLayout.vue'
import inventarioRouter from '@/modules/inventario/router'


const routes = [
  {
    path: '/',
    name: 'authLayout',
    component: AuthLayout
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue') 
  },
  {
    path: '/registro',
    name: 'registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "registro" */ '../views/RegisterView.vue') 
  },
  {
    path: '/inventario',
    ...inventarioRouter
  }
]

const routerAuth = createRouter({
  history: createWebHashHistory(),
  routes
})

export default routerAuth
import Vue from 'vue'
import Router from 'vue-router'

import Login from './pages/Login'
import index from './pages/index'
import Menu from './pages/Menu.vue'
import Upload from './pages/Upload'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Login
      },
      {
        path: '/home',
        component: index
      },
      {
        path: '/menu',
        component: Menu
      },
      {
        path: '/upload',
        component: Upload
      }
    ]
  })
}
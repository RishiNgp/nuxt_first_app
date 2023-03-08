import Vue from 'vue'
import Router from 'vue-router'

import Login from './pages/Login'
import index from './pages/index'
import Menu from './pages/Menu.vue'
import Upload from './components/Upload'
import Overview from './pages/Overview'
import calendar from './pages/calendar'
import faq from './pages/faq'
import transcation from './pages/transcation'
import testimontails from './pages/testimontails'
import dashboard from './pages/dashboard'

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
      },
      {
        path: '/overview',
        component: Overview
      },
      {
        path: '/faq',
        component: faq
      },
      {
        path: '/calendar',
        component: calendar
      },
      {
        path: '/testimontails',
        component: testimontails
      },
      {
        path:'/transcation',
        component:transcation
      },
      {
        path:'/dashboard',
        component:dashboard
      }

    ]
  })
}
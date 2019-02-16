import Vue from 'vue'
import Router from 'vue-router'

// Guards
import guest from '@/shared/guards/guest'
import auth from '@/shared/guards/auth'

// Auth
import register from '@/pages/auth/register'
import login from '@/pages/auth/login'

// Presentational
import home from '@/pages/home'

import createProject from '@/pages/projects/create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Presentational
    { path: '/', name: 'home', component: home },
    { path: '/register', name: 'register', component: register, beforeEnter: guest},
    { path: '/login', name: 'login', component: login, beforeEnter: guest},

    { path: '/projects/create', name: 'projects.create', component: createProject },
  ]
})

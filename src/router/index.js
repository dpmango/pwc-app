import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/feed' },
  {
    path: '/feed',
    alias: '/',
    name: 'Feed',
    component: () => import('@/pages/Feed.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
  },
  {
    path: '/profile/points',
    name: 'Profile Points',
    component: () => import('@/pages/ProfilePoints.vue'),
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/pages/Articles.vue'),
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: () => import('@/pages/Article.vue'),
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('@/pages/Tasks.vue'),
  },
  {
    path: '/tasks/:id',
    name: 'Task',
    component: () => import('@/pages/Task.vue'),
  },
  {
    path: '/pwc',
    name: 'PwC',
    component: () => import('@/pages/PWC.vue'),
  },
  {
    path: '/page/:name',
    name: 'StaticPage',
    component: () => import('@/pages/StaticPage.vue'),
  },
  {
    path: '/enable-notifications',
    name: 'EnableNotification',
    component: () => import('@/pages/EnableNotification.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vuex.Store.prototype.$router = router

export default router

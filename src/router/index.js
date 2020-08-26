import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vuex.Store.prototype.$router = router

export default router

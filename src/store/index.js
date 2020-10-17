import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules,
  actions: {
    async init({ dispatch }) {
      await dispatch('vk/fetchProfile')
      await dispatch('vk/checkToken', 'accessToken')
    },
    async noVkInit({ dispatch }) {
      dispatch('vk/getToken', {
        vk_id: 202119180,
        name: 'Сергей',
        surname: 'Хмелевской',
      })
    },
  },
  strict: process.env.NODE_ENV !== 'production',
})

for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

export default store

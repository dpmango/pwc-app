import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state: {
    alerts: [],
  },
  getters: {
    alerts(state) {
      return state.alerts
    },
  },
  mutations: {
    addAlertMessage(state, alert) {
      state.alerts.push(alert)
    },
    removeAlert(state, alertId) {
      state.alerts = state.alerts.filter(alert => alert.id !== alertId)
    },
  },
  modules,
  strict: process.env.NODE_ENV !== 'production',
})

for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

export default store

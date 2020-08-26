import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import '@/http'
import StandartTemplate from './components/templates/StandartTemplate'

Vue.component('StandartTemplate', StandartTemplate)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')

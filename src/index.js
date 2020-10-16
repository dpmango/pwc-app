import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import '@/http'

import * as components from '@/components'

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

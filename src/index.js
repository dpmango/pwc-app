import Vue from 'vue'
import 'core-js/es/map'
import 'core-js/es/set'
import App from './App'
import router from '@/router'
import store from '@/store'
import '@/http'
import bridge from '@vkontakte/vk-bridge'
import * as components from '@/components'

for (const name in components) {
  Vue.component(name, components[name])
}

bridge.send('VKWebAppInit', {})

// bridge.subscribe(e => console.log(e))

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

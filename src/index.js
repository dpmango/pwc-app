import 'core-js/stable'
import 'regenerator-runtime'
import Vue from 'vue'
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

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

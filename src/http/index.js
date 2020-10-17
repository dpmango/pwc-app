import Axios from 'axios'
import Vuex from 'vuex'
// import store from '@/store'
import * as CONSTS from './constants'

const http = Axios.create({
  baseURL: process.env.HOST || CONSTS.PWC_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

// const removeToken = () => {
//   delete http.defaults.headers['Authorization']
//   store.commit('auth/removeToken')
//   store.$router.push('/auth/login')
// }

// http.interceptors.response.use(
//   config => {
//     const { method, token } = config.data

//     if (method === 'login') {
//       http.defaults.headers['Authorization'] = `Bearer ${token}`
//       store.commit('auth/setToken', `Bearer ${token}`)
//       store.dispatch('user/fetchUserInfo')
//       store.$router.push('/profiles')
//     }
//     if (method === 'logout') {
//       removeToken()
//     }
//     return Promise.resolve(config)
//   },
//   error => {
//     const { status } = error.response
//     const { token } = store.state.auth

//     if (status === 401 && token) {
//       removeToken()
//       // store.commit('addAlertMessage', store.$createError(error.response?.data))
//     }
//     return Promise.reject(error)
//   }
// )

Vuex.Store.prototype.$http = http

// if (TOKEN) {
//   http.defaults.headers['Authorization'] = TOKEN
//   store.commit('auth/setToken', TOKEN)
//   store.dispatch('user/fetchUserInfo')
// }

import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import * as CONSTS from './constants'

const http = Axios.create({
  baseURL: process.env.HOST || CONSTS.PWC_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

Vuex.Store.prototype.$http = http
Vue.prototype.$http = http

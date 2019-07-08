import Vue from 'vue'
import app from './app'
import router from './router'
import store from './vuex/store'
import Header from './components/Header/Header.vue'

import ajax from "./api/ajax"

Vue.prototype.$ajax=ajax

Vue.component('Header',Header)
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store,
})

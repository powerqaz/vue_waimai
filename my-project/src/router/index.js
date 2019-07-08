/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routers.js'

Vue.use(VueRouter)

export default new VueRouter({
  routes
})

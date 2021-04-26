import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(Vuex)
Vue.use(VueRouter)
const store = createStore()
const router = createRouter()
router.beforeEach((to, from, next) => {
  console.log('before each go')
  next()
  // if (to.fullPath === '/app') {
  //   next({path: '/login'})
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve go')
  next()
})

router.afterEach((to, from) => {
  console.log('after each go')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')

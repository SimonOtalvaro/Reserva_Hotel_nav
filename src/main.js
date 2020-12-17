// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vueRouter from 'vue-router'
import Vue from 'vue'
import router from './router'
import App from './App'

Vue.use(vueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
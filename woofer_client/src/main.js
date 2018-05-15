// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false

/* eslint-disable no-new */
// This is the logic that helps posts the components in the views. Everything has to go through this constructer 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


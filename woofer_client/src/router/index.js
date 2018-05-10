import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import test from '@/views/test'
import footer from '@/components/footer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/asdf',
      name: 'asdf',
      component: test
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import signUp from '@/views/signUp'
import proposalRenter from '@/views/proposalRenter'
import signIn from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/join',
      name: 'signup',
      component: signUp
    },
    {
      path: '/yourmatches',
      name: 'proprenter',
      component: proposalRenter
    },
    {
      path: '/signin',
      name: 'signin',
      component: signIn
    }

  ]
})

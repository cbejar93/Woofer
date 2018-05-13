import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import signUp from '@/views/signUp'
import userHome from '@/views/userHome'
import signIn from '@/views/login'
import addDog from '@/views/addDog'
import shareHome from '@/views/shareHome'

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
      path: "/findadog",
      name: "resultPage",
      component: userHome
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
    },
    {
      path: '/adddog',
      name: 'adddog',
      component: addDog
    },
    {
      path: '/shareprofile',
      name: 'shareprofile',
      component: shareHome
    }

  ]
})

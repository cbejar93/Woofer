import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import signUp from '@/views/signUp'
import userHome from '@/views/userHome'

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
      path: "/dogsviews",
      name: "resultPage",
      component: userHome
    }

  ]
})

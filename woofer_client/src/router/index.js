import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import signUp from '@/views/signUp'
import userHome from '@/views/userHome'
import signIn from '@/views/login'
import addDog from '@/views/addDog'
import shareHome from '@/views/shareHome'
import wooferprofile from '@/views/wooferprofile'
import inbox from '@/views/inbox'
// Above is us importing all the views to pass throught the Vue Router


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // Just a simple path and the name of the component to show in the DOM 
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
    },
    {
      path: '/wooferhome',
      name: 'wooferhome',
      component: wooferprofile
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: inbox
    }

  ]
})

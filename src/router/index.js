/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Home from '@/components/pages/Home'
import BabyNameFinder from '@/components/pages/BabyNameFinder'
import Alphabet from '@/components/pages/Alphabet'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/babyname',
      name: 'BabyNameFinder',
      component: BabyNameFinder
    },
    {
      path: '/alphabet',
      name: 'Alphabet',
      component: Alphabet
    }
  ]
})
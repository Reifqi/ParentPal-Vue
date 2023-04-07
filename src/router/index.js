/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Home from '@/components/pages/Home'

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
    }
  ]
})

// const isUserLoggedIn = false
// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       meta: {
//         needsAuth: true
//       }
//     }
//   ]
// })
// router.beforeEach((to, from, next) => {
//   if (to.meta.needsAuth) {
//     if (isUserLoggedIn) {
//       next('')
//     } else {
//       next('/')
//     }
//     next('/')
//   } else {
//     next()
//   }
// })

// export default router
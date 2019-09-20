import Vue from 'vue'
import Router from 'vue-router'
//Admin
import AdminImg from '@/components/AdminSite/AdminImg'
import AdminTes from'@/components/AdminSite/AdminTes'
import Login from '@/components/AdminSite/Login'
//Main
import SplashPage from '@/components/MainSite/SplashPage'
// import Kitchen from '@/components/MainSite/Kitchen'
import Bathroom from '@/components/MainSite/Bathroom'
import Closet from '@/components/MainSite/Closet'
import Testimonial from '@/components/MainSite/Testimonials'







Vue.use(Router)

export default new Router({
  routes: [
    //AdminSite
    {
      path: '/AdminImg',
      name: 'AdminImg',
      component: AdminImg
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AdminTes',
      name: 'AdminTes',
      component: AdminTes
    },
    //MainSite
    {
      path: '/SplashPage',
      name: 'SplashPage',
      component: SplashPage
    },
    {
      path: '/Kitchen',
      name: 'Kitchen',
      component: Kitchen
    },
    {
      path: '/Bathroom',
      name: 'Bathroom',
      component: Bathroom
    },
    {
      path: '/Closet',
      name: 'Closet',
      component: Closet
    },
    {
      path: '/Testimonials',
      name: 'Testimonials',
      component: Testimonial
    }
  ]
})

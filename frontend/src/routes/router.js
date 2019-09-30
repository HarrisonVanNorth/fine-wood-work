
//Admin
// import AdminImg from '@/components/AdminSite/AdminImg'
// import AdminTes from'@/components/AdminSite/AdminTes'
// import Login from '@/components/AdminSite/Login'
//Main
import SplashPage from '@/components/MainSite/SplashPage'
// import Kitchen from '@/components/MainSite/Kitchen'
// import Bathroom from '@/components/MainSite/Bathroom'
// import Closet from '@/components/MainSite/Closet'
// import Testimonial from '@/components/MainSite/Testimonials'


export default ({
  routes: [
    //AdminSite
    // {
    //   path: '/AdminImg',
    //   name: 'AdminImg',
    //   component: AdminImg
    // },
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/AdminTes',
    //   name: 'AdminTes',
    //   component: AdminTes
    // },
    //MainSite
    {
      path: '/',
      name: 'SplashPage',
      component: SplashPage
    },
  ]
})

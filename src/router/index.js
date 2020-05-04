import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoadRoute = pageName => {
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${pageName}`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoadRoute('Home')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: lazyLoadRoute('Profile'),
      props: true,
      children: [
        {
          path: 'edit',
          component: lazyLoadRoute('EditProfile')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoadRoute('About')
    },
    {
      path: '*',
      name: '404',
      component: lazyLoadRoute('Page404')
    }
  ]
})

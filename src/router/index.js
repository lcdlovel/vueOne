import Vue from 'vue'
import Router from 'vue-router'
import AllCommon from 'common'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }    path: '/',
    {
      path: '/',
      redirect: to => {
        return '/jiangdu/Login'
      }
    },
    {
      path: '/:suburl/Login',
      name: 'Login',
      component: AllCommon.Login
    }
  ]
})

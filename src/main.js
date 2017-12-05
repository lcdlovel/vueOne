// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'base/filterAxios'
import store from 'store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './Register'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  sessionStorage.setItem('SubUrl', to.params.suburl ? to.params.suburl : 'SuperAdmin')
  // if (to.path === '/' + sessionStorage.getItem('SubUrl') + '/warn/BasicWarn') {
  //   ISINWarn = true
  //   // console.log(ISINWarn)//判断有没有进入基本预警页面
  // } else {
  //   ISINWarn = false
  //   // console.log(ISINWarn)//判断有没有进入基本预警页面
  // }
  // if (to.path === '/' + sessionStorage.getItem('SubUrl') + '/warn/MapMonitor') {
  //   ISINWarn2 = true
  //   // console.log(ISINWarn2)//判断有没有进入基本预警页面
  // } else {
  //   ISINWarn2 = false
  //   // console.log(ISINWarn2)//判断有没有进入基本预警页面
  // }
  if (!sessionStorage.getItem('Token') && to.path !== '/' + sessionStorage.getItem('SubUrl') + '/Login') {
//  无token并且想进入Home,就重定向至Login
    next('/' + sessionStorage.getItem('SubUrl') + '/login')
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: {App}
})

import Vue from 'vue'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// function tips (type, isSuccess, errorMsg) {
//   var option = ''
//   switch (type) {
//     case 'post':
//       option = '添加'
//       break
//     case 'put':
//       option = '修改'
//       break
//     case 'delete':
//       option = '删除'
//       break
//   }
//   // if (type === 'post') {
//   //   option = '添加'
//   // } else if (type === 'put') {
//   //   option = '修改'
//   // } else if (type === 'delete') {
//   //   option = '删除'
//   // }
//   if (isSuccess === true) {
//     Vue.prototype.$message({
//       message: option + '成功',
//       type: 'success'
//     })
//   } else {
//     Vue.prototype.$message.error(option + '失败,' + errorMsg)
//   }
// }
//
// // 添加请求拦截器
// axios.interceptors.request.use(
//   (config) => {
//     if (sessionStorage.getItem('CurrentUser') !== null) {
//       let currentUserInfo = JSON.parse(sessionStorage.getItem('CurrentUser'))
//       if (config.method !== 'get' && currentUserInfo.Role === 'Common') {
//         return Vue.prototype.$message.error('普通用户无权执行此操作,请更换管理员账户登录!')
//       }
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   })
//
/**
 * 响应拦截器--->做错误统一处理
 */
axios.interceptors.response.use(
  (response) => {
    if (response.config.method !== 'get') {
      if (!response.data.Error) {
        Vue.prototype.$message({
          message: response.data.SuccessMsg,
          type: 'success'
        })
      } else {
        Vue.prototype.$message.error(response.data.Error.Msg)
      }
    } else {
      if (response.data.Error !== null) {
        Vue.prototype.$message.error(response.data.Error.Msg)
      }
    }
    if (response.config.method === 'get') {
      if (!response.data.Data) {
        Vue.prototype.$message({
          message: '数据未找到',
          type: 'warning'
        })
      }
    }
    if (response.status === 200) {
      response['frontMsg'] = '请求成功'
    }
    return response
  },
  (error) => {
    console.log('路由错误统一处理 ---> filterAxios')
    console.log(error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          Vue.prototype.$message.error('请求失败,请检查用户权限 ! (401)')
      }
    }
    return Promise.reject(error)
  })

export default axios

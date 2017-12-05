import axios from 'axios'
import {baseUrl} from 'base/url'

axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
// axios.defaults.headers.common['crossDomain'] = true

class axiosEntry {
  static sendAjax ({type: type1, url: url1, data: data1}) {
    // console.log(JSON.parse(sessionStorage.getItem('token')))
    let tempData = data1
    tempData['SubUrlMapu'] = sessionStorage.getItem('SubUrl')
    if (typeof (sessionStorage.getItem('token')) !== 'undefined') {
      axios.defaults.headers.common['Token'] = JSON.parse(sessionStorage.getItem('token'))
    } else {
      console.log('登录中')
    }
    let datas = ''
    type1 === 'get' ? datas = {params: tempData} : datas = tempData
    return new Promise((resolve, reject) => {
      axios[type1](url1, datas)
        .then((res) => {
          resolve(res)
        })
    })
  }
}

export default axiosEntry

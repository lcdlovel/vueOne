import axiosEntry from 'base/axiosEntry'

class CRUD extends axiosEntry {
  static getInfo ({url: url1, data: data1, callback: callbackFn}) {
    super.sendAjax({type: 'get', url: url1, data: data1, callback: callbackFn})
      .then((res) => {
        callbackFn(res)
      })
  }
  static addInfo ({url: url1, data: data1, callback: callbackFn}) {
    super.sendAjax({type: 'post', url: url1, data: data1, callback: callbackFn})
      .then((res) => {
        callbackFn(res)
      })
  }
  static putInfo ({url: url1, data: data1, callback: callbackFn}) {
    super.sendAjax({type: 'put', url: url1, data: data1, callback: callbackFn})
      .then((res) => {
        callbackFn(res)
      })
  }
  static delInfo ({url: url1, data: data1, callback: callbackFn}) {
    super.sendAjax({type: 'delete', url: url1, data: data1, callback: callbackFn})
      .then((res) => {
        callbackFn(res)
      })
  }
}

export default CRUD
export const ERR_OK = 0

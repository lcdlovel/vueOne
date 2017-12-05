// module.exports = {
export default {
  dateChange: {
    changeUnix: function (unixTime) {
      let date = new Date(unixTime)
      let Y = ''
      let M = ''
      let D = ''
      let h = ''
      let m = ''
      let s = ''
      Y = date.getFullYear() + '-'
      M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
      m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
      s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + ''
      return (Y + M + D + h + m + s)
    },
    elementDropT: function (Time) {
      let d = new Date(Time)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      month = month < 10 ? ('0' + month) : month
      let day = d.getDate()
      day = day < 10 ? ('0' + day) : day
      let hour = d.getHours()
      hour = hour < 10 ? ('0' + hour) : hour
      let minutes = d.getMinutes()
      minutes = minutes < 10 ? ('0' + minutes) : minutes
      let second = d.getSeconds()
      second = second < 10 ? ('0' + second) : second
      let time = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
      Time = time
      return Time
    }
  },
  checkAuth (currentUser) {
    let tempUser = JSON.parse(currentUser)
    if (tempUser.userLevel === 1) {
      return true
    } else {
      return false
    }
  }
}

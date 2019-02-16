export default function (to, from, next) {
    var token = localStorage.getItem('token')
    if (token) {
      next({ path: '/' })
    } else {
      return next()
    }
  }
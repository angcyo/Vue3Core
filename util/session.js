/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/02
 */

const sessionStorageHandler = {
  get: function (obj, prop) {
    return _fromJson(sessionStorage.getItem(prop))
  },
  set: function (obj, prop, value) {
    if (value === null || value === undefined) {
      //清除
      sessionStorage.removeItem(prop)
    } else {
      sessionStorage.setItem(prop, _toJson(value))
    }
    return true
  },
  has: function (obj, prop) {
    const item = sessionStorage.getItem(prop)
    return item != null || item !== undefined
  },
  deleteProperty: function (obj, prop) {
    sessionStorage.removeItem(prop)
  },
}

/**[sessionStorage]代理*/
window.session = new Proxy({}, sessionStorageHandler)

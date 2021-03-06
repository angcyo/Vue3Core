/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/11/30
 */

const localStorageHandler = {
  get: function (obj, prop) {
    return _fromJson(localStorage.getItem(prop))
  },
  set: function (obj, prop, value) {
    if (value === null || value === undefined) {
      //清除
      localStorage.removeItem(prop)
    } else {
      localStorage.setItem(prop, _toJson(value))
    }
    return true
  },
  has: function (obj, prop) {
    const item = localStorage.getItem(prop)
    return item != null || item !== undefined
  },
  deleteProperty: function (obj, prop) {
    localStorage.removeItem(prop)
  },
}

/**[localStorage]代理*/
window.local = new Proxy({}, localStorageHandler)

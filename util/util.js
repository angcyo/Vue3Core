/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2020/10/11
 *
 *  Vue 插件
 * https://cn.vuejs.org/v2/guide/plugins.html
 * 已在index.js中初始化
 */

const Util = {}

Util.install = function (Vue, options) {
  Vue.prototype.$util = Util
}

/**生成uuid*/
Util.uuid = function () {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

Util.toJson = (data) => JSON.stringify(data)
Util.fromJson = (json) => JSON.parse(json)

/**获取一个错误对象*/
Util.error = (msg) => {
  let error = new Error(msg || '调用栈 ↓')
  if (!error.stack) {
    try {
      throw error
    } catch (err) {
      error = err
    }
  }
  return error
}

/**判断是否是PC浏览器*/
Util.isPc = function () {
  const userAgentInfo = navigator.userAgent
  const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
  let flag = true
  for (let v = 0; v < agents.length; v++) {
    if (userAgentInfo.indexOf(agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**判断`obj`是字符串*/
Util.isString = function (obj) {
  return Boolean(obj && typeof obj === 'string')
}

Util.isNumber = function (obj) {
  return Boolean(obj && typeof obj === 'number')
}

Util.isArray = function (obj) {
  return Boolean(obj && obj instanceof Array)
}

Util.len = function (obj) {
  if (Util.isArray(obj)) {
    return obj.length
  } else if (Util.isString(obj)) {
    return obj.length
  }
  return -1
}

Util.isObject = function (obj) {
  return Boolean(obj && typeof obj === 'object')
}

Util.isPromise = function (obj) {
  return Boolean(obj && obj instanceof Promise)
}

Util.isFunction = function (obj) {
  return Boolean(obj && typeof obj === 'function')
}

/**
 * 设置指定对象的指定属性为 undefined
 * @param obj 操作的对象
 * @param fields 操作的字段
 * */
Util.undefinedFields = function (obj, fields) {
  if (Util.isObject(obj)) {
    if (Util.isString(fields)) {
      obj[fields] = undefined
    } else if (Util.isArray(fields)) {
      fields.forEach(item => {
        if (Util.isString(item)) {
          obj[item] = undefined
        }
      })
    }
  }
}

/**复制对象的指定属性, 到对象的另一个属性
 * @param obj 需要操作的数据源, 支持对象和数组
 * @param fromFields 需要复制的属性, 支持数组
 * @param toFields 复制到的属性, 如果是数组, 那么需要一一对应
 * */
Util.copyFields = function (obj, fromFields, toFields) {

  let _copy = function (obj) {
    if (Util.isArray(fromFields) && Util.isArray(toFields)) {
      for (let i = 0; i < Math.min(fromFields.length, toFields.length); i++) {
        let fromField = fromFields[i]
        if (obj.hasOwnProperty(fromField)) {
          let toField = toFields[i]
          obj[toField] = obj[fromField]
        }
      }
    } else if (Util.isString(fromFields) && Util.isString(toFields)) {
      if (obj.hasOwnProperty(fromFields)) {
        obj[toFields] = obj[fromFields]
      }
    } else {
      console.log(`不支持的操作:${typeof fromFields} -> ${typeof toFields}`)
    }
  }

  if (Util.isArray(obj)) {
    obj.forEach(item => _copy(item))
  } else {
    _copy(obj)
  }

  return obj
}

//<editor-fold desc="基础操作">

/**从参数中, 选择一个不是undefined的参数*/
Util.one = function () {
  if (arguments && arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      let arg = arguments[i]
      if (typeof arg === 'undefined') {
        continue
      }
      return arg
    }
  }
  return undefined
}

Util.isNullOrEmpty = function (str) {
  return !str || str.length <= 0
}

/**判断对象是否为空*/
window.isNullOrEmpty = function (obj) {
  if (obj === undefined || obj === null) {
    return true
  } else if (Util.isString(obj) || Util.isArray(obj)) {
    return obj.length === 0
  } else {
    return false
  }
}

//</editor-fold desc="基础操作">

export default Util

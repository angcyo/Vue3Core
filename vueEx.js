/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/06
 */

/**
 * 将新的数据对象, 赋值给[ref]响应对象, 不能扩展Object原型链, VUE编译过不去
 * [UnwrapNestedRefs]
 * https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive
 * */

/*Object.prototype.refReset = function (data) {
  Object.assign(this, data)
}*/

import {isReactive, isRef} from "vue"
import Util from "./util/util"

/**将[data]的属性, 分配给[ref]*/
window.refSet = function (ref, data) {
  if (Util.isArray(ref)) {
    return ref.reset(data)
  } else {
    return Object.assign(ref, data)
  }
}

/**先清空[ref], 再分配[data]*/
window.refReset = function (ref, data) {
  refClear(ref)
  return refSet(ref, data)
}

/**清空ref对象内的数据*/
window.refClear = function (ref) {
  if (isRef(ref) || isReactive(ref)) {
    if (Util.isArray(ref)) {
      ref.clearAll()
    } else {
      Object.keys(ref).forEach(key => (ref[key] = undefined))
    }
  }
}

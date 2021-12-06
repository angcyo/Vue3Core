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

window._refReset = function (ref, data) {
  return Object.assign(ref, data)
}

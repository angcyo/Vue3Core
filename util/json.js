/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/11/30
 */

/**将对象转换成json字符串
 * [Invalid prop: type check failed for prop "toJson"]*/
// Object.prototype.toJson = function () {
//   return JSON.stringify(this)
// }

window._toJson = function (obj) {
  return JSON.stringify(obj)
}

window._fromJson = function (json) {
  return JSON.parse(json)
}

/**将json字符串转换成对象*/
String.prototype.fromJson = function () {
  return JSON.parse(this)
}

//Util.toJson = (data) => JSON.stringify(data)
//Util.fromJson = (json) => JSON.parse(json)

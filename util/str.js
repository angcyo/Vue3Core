/** 字符串工具
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

/**https://my.oschina.net/bing309/blog/3132260*/

/**
 * var arr = [48,48,48,48]
 * uint8ArrayToString(arr)  //"0000"
 * */
function uint8ArrayToString(fileData) {
  let dataString = ""
  for (let i = 0; i < fileData.length; i++) {
    dataString += String.fromCharCode(fileData[i])
  }
  return dataString
}

/**
 * stringToUint8Array('12313132') // Uint8Array(8)   [49, 50, 51, 49, 51, 49, 51, 50]
 * */
function stringToUint8Array(str) {
  const arr = []
  let i = 0, j = str.length
  for (; i < j; ++i) {
    arr.push(str.charCodeAt(i))
  }
  return new Uint8Array(arr)
}

/**
 * intTobytes(10) // [0, 10]
 * */
function intToBytes(n) {
  const bytes = []
  for (let i = 0; i < 2; i++) {
    bytes[i] = n >> (8 - i * 8)
  }
  return bytes
}

/**
 *
 * stringToArrayBuffer('00000')
 * 输出：ArrayBuffer(10) {}
 * */
function stringToArrayBuffer(str) {
  const buf = new ArrayBuffer(str.length * 2) // 每个字符占用2个字节
  const bufView = new Uint16Array(buf)
  let i = 0, strLen = str.length
  for (; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

function arrayBufferToString(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

/**
 * 输出：Blob {size: 3, type: "png"}
 * */
function base64toBlob(base64, type) {
  // 将base64转为Unicode规则编码
  let bstr = atob(base64) //atob(base64, type)
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n) // 转换编码后才可以使用charCodeAt 找到Unicode编码
  }
  return new Blob([u8arr], {type,})
}

/**字符串转换成base64
 * window.btoa('zhangxinxu');
 * // 返回：'emhhbmd4aW54dQ=='
 * */
String.prototype.toBase64 = function () {
  return window.btoa(this)
}

/**
 * window.atob('emhhbmd4aW54dQ==');
 * // 返回：'zhangxinxu'
 * */
String.prototype.fromBase64 = function () {
  return window.atob(this)
}

/** 字符串中是否包含另一个字符串 */
String.prototype.contains = function (str) {
  return this.indexOf(str) !== -1
}

/**支持正则*/
String.prototype.have = function (str) {
  return this.search(str) !== -1
}

/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

/**https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL*/

import {http} from "../axios/http"
import Util from "./util"

/** 从url中, 获取查询的参数
 * ?qr=https://api.isoyu.com/ip_images.php&raw=https://api.isoyu.com/ip_images.php
 *
 * https://www.jianshu.com/p/708c915fb905
 * */
function getQueryVariable(variable) {
  let query = window.location.search.substring(1)
  let vars = query.split("&")
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=")
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return undefined
}

/**[toUrl]*/
function getQueryParam(queryParams) {
  let params = ''
  for (const key in queryParams) {
    let value = queryParams[key] !== undefined ? queryParams[key] : ''
    params += `&${key}=${encodeURIComponent(value)}`
  }
  return params ? params.substring(1) : ''
}

function connectUrlParams(url, queryParams) {
  //看原始url地址中开头是否带?，然后拼接处理好的参数
  if (queryParams && Util.isObject(queryParams)) {
    return url += (url.indexOf('?') < 0 ? '?' : '') + getQueryParam(queryParams)
  }
  return url
}

/**将this, 拼上host, 返回整体的url
 * [queryParams] 可选的查询参数对象 {a:1, b:2}*/
String.prototype.toUrl = function (host, queryParams) {

  let _params = undefined
  let _host = undefined

  if (Util.isObject(host)) {
    _params = host
    _host = http.baseUrl
  } else {
    _host = host || http.baseUrl
    _params = queryParams
  }

  // 开头是否有/
  const _s = this.startsWith("/")
  // 结尾是否有/
  const _e = _host.endsWidth("/")

  //拼接url
  let url = undefined
  if (_s && _e) {
    url = `${_host}${this.trimStart("/")}`
  } else if (!_s && !_e) {
    url = `${_host}/${this}`
  } else {
    url = `${_host}${this}`
  }

  //const h = new URL(this, _host)
  //const url = `${h}`

  //拼接url参数
  return connectUrlParams(url, _params)
}

/**转换成[URL]对象*/
String.prototype.toURL = function () {
  return new URL(this)
}

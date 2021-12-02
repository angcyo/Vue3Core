/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/11/30
 */

import axiosStatic from 'axios'
import Util from '../util/util.js'

//<editor-fold desc="拦截器">

function initInterceptors(axios) {
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    let requestTraceId = config.headers["requestTraceId"] || Util.uuid()
    // 在发送请求之前做些什么
    log(`开始请求:[${requestTraceId}][${config.method}]:${config.url}`)

    if (!config.headers["clientUuid"]) {
      config.headers["clientUuid"] = window.uuid
    }

    if (!config.headers["requestTraceId"]) {
      config.headers["requestTraceId"] = requestTraceId
    }

    if (!config.headers["clientType"]) {
      config.headers["clientType"] = "web"
    }

    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = http.token || local.token || session.token
    }

    return config
  }, function (error) {
    // 对请求错误做些什么
    log(`请求错误1:${error}`)
    return Promise.reject(error)
  })

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let requestTraceId = response.config.headers["requestTraceId"]
    log(`请求返回:[${requestTraceId}][${response.status}]:${_toJson(response.data)}`)
    return response
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    log(`请求错误2:${error}:${_toJson(error?.response?.data)}`)
    return Promise.reject(error)
  })
}

//</editor-fold desc="拦截器">

//<editor-fold desc="操作">

/**包裹config[AxiosRequestConfig]*/
function wrapCancelTokenConfig(configOrUrl) {
  const CancelToken = axiosStatic.CancelToken
  const source = CancelToken.source()

  let config
  if (Util.isString(configOrUrl)) {
    config = {
      cancelToken: source.token,
      url: configOrUrl
    }
  } else {
    config = {
      cancelToken: source.token,
      ...configOrUrl
    }
  }

  return {
    config,
    source
  }
}

function wrapConfig(configOrUrl) {
  let config
  if (Util.isString(configOrUrl)) {
    config = {
      url: configOrUrl
    }
  } else {
    config = configOrUrl
  }
  return config
}

/**处理[AxiosResponse], 验证逻辑code码*/
function handleResponseData(response, callback) {
  const data = response.data
  const code = data.code
  if (code) {
    if (code >= 200 && code < 300) {
      //请求成功
      callback?.(data.data, null)
    } else {
      callback?.(null, new Error(data.msg || data.message || `错误码:${code}`))
    }
  } else {
    callback?.(response.data, null)
  }
}

/**处理[AxiosError], 获取接口返回的错误信息*/
function handleResponseError(error, callback) {
  const data = error?.response?.data
  let mss = data?.msg || data?.message || error?.response?.statusText || error.message || `错误码[${error?.response?.status}]`
  callback?.(null, new Error(mss))
}

//</editor-fold desc="操作">

//<editor-fold desc="对象">

const createHttp = function () {
  /*-----------------属性-----------------*/
  this.baseUrl = ""
  this.uuid = ""
  this.axios = undefined
  this.token = undefined

  /*-----------------方法-----------------*/

  /**初始化方法
   * [baseUrl] 默认接口地址
   * [config] [AxiosRequestConfig] */
  this.init = (baseUrl, config) => {
    //生成客户端唯一id
    const uuid = Util.uuid()
    window.uuid = uuid
    this.uuid = uuid
    this.baseUrl = baseUrl

    log(`Http初始化-> base:${baseUrl} 客户端唯一ID:${window.uuid}`)

    //超时设置
    const timeout = isDebug ? -1 : 10_000

    //初始化客户端
    this.axios = axiosStatic.create({
      baseURL: baseUrl,
      timeout: timeout,
      timeoutErrorMessage: "请求超时",
      ...config
    })

    //初始化拦截器
    initInterceptors(this.axios)
  }

  /*-----------------原生请求方法-----------------*/

  /**请求*/
  this.request = (config) => {
    /**https://axios-http.com/zh/docs/api_intro*/
    return this.axios.request({
      /*method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }*/
      ...config
    })
  }

  /**get方法*/
  this.get = (url, config) => {
    return this.axios.get(url, config)
  }

  /**post方法*/
  this.post = (url, data, config) => {
    return this.axios.post(url, data, config)
  }

  /**put方法*/
  this.put = (url, data, config) => {
    return this.axios.put(url, data, config)
  }

  /*-----------------仅获取数据方法-----------------*/

  /**请求配置[AxiosRequestConfig]*/

  /**
   * [config] [AxiosRequestConfig]
   * [callback] 回调data和error*/
  this.requestData = (configOrUrl, callback) => {
    const {config, source} = wrapCancelTokenConfig(configOrUrl)
    this.axios.request(config).then(response => {
      handleResponseData(response, callback)
    }).catch(error => {
      handleResponseError(error, callback)
    })
    // 取消请求（message 参数是可选的）
    //source.cancel('Operation canceled by the user.');
    return source//可用于取消请求
  }

  this.getData = (configOrUrl, callback) => {
    return this.requestData({
      method: 'get',
      ...wrapConfig(configOrUrl)
    }, callback)
  }

  this.postData = (configOrUrl, callback) => {
    return this.requestData({
      method: 'post',
      ...wrapConfig(configOrUrl)
    }, callback)
  }

  this.putData = (configOrUrl, callback) => {
    return this.requestData({
      method: 'put',
      ...wrapConfig(configOrUrl)
    }, callback)
  }

  /*-----------------可以获取[AxiosResponse]方法-----------------*/

  /**[callback] 回调AxiosResponse和error*/
  this.requestRes = (configOrUrl, callback) => {
    const {config, source} = wrapCancelTokenConfig(configOrUrl)
    this.axios.request(config,).then(response => {
      callback?.(response, null)
    }).catch(error => {
      handleResponseError(error, callback)
    })
    return source
  }

  this.getRes = (configOrUrl, callback) => {
    return this.requestRes({
      method: 'get',
      ...wrapConfig(configOrUrl)
    }, callback)
  }

  this.postRes = (configOrUrl, callback) => {
    return this.requestRes({
      method: 'post',
      ...wrapConfig(configOrUrl)
    }, callback)
  }

  this.putRes = (configOrUrl, callback) => {
    return this.requestRes({
      method: 'put',
      ...wrapConfig(configOrUrl)
    }, callback)
  }

}

//</editor-fold desc="对象">

//<editor-fold desc="实例">

const http = new createHttp()

/**将字符串包裹成对象*/
const wrapObj = (strOrObj) => {
  let obj
  if (Util.isString(strOrObj)) {
    obj = {
      strOrObj
    }
  } else {
    obj = strOrObj
  }
  return obj
}

export {http, wrapObj}

//</editor-fold desc="实例">

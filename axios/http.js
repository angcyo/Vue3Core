/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/11/30
 */

import axiosStatic, {AxiosRequestConfig} from 'axios'
import Util from '../util/util.js'

function initInterceptors(axios) {
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    log(`开始请求[${config.method}]:${config.url}`)

    config.headers.push(config.headers.join)

    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  })
}

const createHttp = function () {
  /*-----------------属性-----------------*/
  this.baseUrl = ""
  this.uuid = ""
  this.axios = undefined

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

    //初始化客户端
    this.axios = axiosStatic.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: {'clientUuid': window.uuid},
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

  /**[callback] 回调data和error*/
  this.requestData = (config, callback) => {
    const CancelToken = axiosStatic.CancelToken
    const source = CancelToken.source()

    let _config
    if (Util.isString(config)) {
      _config = {
        url: config
      }
    } else {
      _config = config
    }

    this.axios.request({
      cancelToken: source.token,
      ..._config
    }).then(response => {
      const data = response.data
      const code = data.code
      if (code) {
        if (code >= 200 && code < 300) {
          //请求成功
          callback?.(data, null)
        } else {
          callback?.(null, new Error(data.msg || data.message || `错误码:${code}`))
        }
      } else {
        callback?.(response.data, null)
      }
    }).catch(error => {
      callback?.(null, error)
    })

    // 取消请求（message 参数是可选的）
    //source.cancel('Operation canceled by the user.');
    return source//可用于取消请求
  }

  this.getData = (config, callback) => {
    let _config
    if (Util.isString(config)) {
      _config = {
        url: config
      }
    } else {
      _config = config
    }
    return this.requestData({
      method: 'get',
      ..._config
    }, callback)
  }

  this.postData = (config, callback) => {
    let _config
    if (Util.isString(config)) {
      _config = {
        url: config
      }
    } else {
      _config = config
    }
    return this.requestData({
      method: 'post',
      ..._config
    }, callback)
  }

  this.putData = (config, callback) => {
    let _config
    if (Util.isString(config)) {
      _config = {
        url: config
      }
    } else {
      _config = config
    }
    return this.requestData({
      method: 'put',
      ..._config
    }, callback)
  }
}

const http = new createHttp()
export {http}

/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

import {http} from "./http"
import Util from "../util/util"

function withToastCallback(data, error, callback) {
  if (error) {
    toastFail(error.msg || error.message || error)
  }
  if (data) {
    toastClear()
  }
  callback?.(data, error)
}

function withNotifyCallback(data, error, callback) {
  if (error) {
    notifyDanger(error.msg || error.message || error)
  }
  /*if (data) {
    notifyClear()
  }*/
  callback?.(data, error)
}

function isContainToast(configOrUrl) {
  if (Util.isString(configOrUrl) && configOrUrl.toLowerCase().contains('toast')) {
    return true
  }
  const url = configOrUrl.url
  if (url && Util.isString(url) && url.toLowerCase().contains('toast')) {
    return true
  }
  return false
}

export default {

  /**toast提示*/
  getData: (configOrUrl, callback) => {
    const toast = isContainToast(configOrUrl)
    http.getData(configOrUrl, (data, error) => {
      if (toast) {
        withToastCallback(data, error, callback)
      } else {
        withNotifyCallback(data, error, callback)
      }
    })
  },

  postData: (configOrUrl, callback) => {
    const toast = isContainToast(configOrUrl)
    http.postData(configOrUrl, (data, error) => {
      if (toast) {
        withToastCallback(data, error, callback)
      } else {
        withNotifyCallback(data, error, callback)
      }
    })
  },

  putData: (configOrUrl, callback) => {
    const toast = isContainToast(configOrUrl)
    http.putData(configOrUrl, (data, error) => {
      if (toast) {
        withToastCallback(data, error, callback)
      } else {
        withNotifyCallback(data, error, callback)
      }
    })
  }

}

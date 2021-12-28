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

export default {

  /**toast提示*/
  getData: (configOrUrl, callback) => {
    const toast = Util.isString(configOrUrl) && configOrUrl.contains('toast')
    http.getData(configOrUrl, (data, error) => {
      if (toast) {
        withToastCallback(data, error, callback)
      } else {
        withNotifyCallback(data, error, callback)
      }
    })
  },

  postData: (configOrUrl, callback) => {
    const toast = Util.isString(configOrUrl) && configOrUrl.contains('toast')
    http.postData(configOrUrl, (data, error) => {
      if (toast) {
        withToastCallback(data, error, callback)
      } else {
        withNotifyCallback(data, error, callback)
      }
    })
  },

  putData: (configOrUrl, callback) => {
    const toast = Util.isString(configOrUrl) && configOrUrl.contains('toast')
    http.putData(configOrUrl, (data, error) => {
      if (toast) {
        withToastCallback(data, error, callback)
      } else {
        withNotifyCallback(data, error, callback)
      }
    })
  }

}

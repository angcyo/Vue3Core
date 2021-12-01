/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

import {http} from "./http"

function withToastCallback(data, error, callback) {
  if (error) {
    toastFail(error.msg || error.message || error)
  }
  callback?.(data, error)
}

export default {

  /**toast提示*/
  getData: (configOrUrl, callback) => {
    http.getData(configOrUrl, (data, error) => {
      withToastCallback(data, error, callback)
    })
  },

  postData: (configOrUrl, callback) => {
    http.postData(configOrUrl, (data, error) => {
      withToastCallback(data, error, callback)
    })
  },

  putData: (configOrUrl, callback) => {
    http.putData(configOrUrl, (data, error) => {
      withToastCallback(data, error, callback)
    })
  }

}

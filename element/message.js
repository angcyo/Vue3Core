/**
 * https://element-plus.org/zh-CN/component/message.html
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2022-8-31
 */

import {ElLoading, ElMessage} from 'element-plus'
import {wrapObj} from "../axios/http"

/**
 * forbidClick    是否禁止背景点击
 * overlay    是否显示背景遮罩层
 * */

/**
 * options?: string | messageProps
 * */
window.toast = function (options) {
  return ElMessage(options)
}

window.toastSuccess = function (options) {
  //ElMessage.success(options)
  return ElMessage({
    ...wrapObj(options, 'message'),
    type: 'success',
  })
}

window.toastFail = function (options) {
  //ElMessage.error(options)
  return ElMessage({
    ...wrapObj(options, 'message'),
    type: 'error',
  })
}

window.toastLoading = function (options) {
  //loading.close()
  return ElLoading.service({
    lock: true,
    fullscreen: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.2)',
    ...wrapObj(options)
  })
}

/**清除toast
 * https://element-plus.org/zh-CN/component/message.html#%E5%8D%95%E7%8B%AC%E5%BC%95%E7%94%A8
 *
 * [type] ["success", "info", "warning", "error"]
 * */
window.toastClear = function (type) {
  ElLoading.service().close() //关闭loading
  if (type) {
    ElMessage.closeAll(type)
  } else {
    ElMessage.closeAll()
  }
}



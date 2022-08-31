/**
 *
 * https://element-plus.org/zh-CN/component/notification.html
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2022-8-31
 */

import {ElNotification} from 'element-plus'
import {wrapObj} from "../axios/http"

/**
 * ["success", "info", "warning", "error"]
 *
 *  ElNotification({
 *     title: 'Success',
 *     message: 'This is a success message',
 *     type: 'success',
 *   })
 *
 * 展示时长(ms)，值为 0 时，notify 不会消失
 * */

window.notify = (options) => {
  return ElNotification({
    type: 'info',
    ...wrapObj(options, 'message')
  })
}

// 主要通知
window.notifyPrimary = (options) => {
  return ElNotification({
    type: 'info',
    ...wrapObj(options, 'message')
  })
}

// 成功通知
window.notifySuccess = (options) => {
  return ElNotification({
    type: 'success',
    ...wrapObj(options, 'message')
  })
}

// 危险通知
window.notifyDanger = (options) => {
  return ElNotification({
    type: 'error',
    ...wrapObj(options, 'message')
  })
}

// 警告通知
window.notifyWarning = (options) => {
  return ElNotification({
    type: 'warning',
    ...wrapObj(options, 'message')
  })
}

/**
 * 清除通知
 * https://element-plus.org/zh-CN/component/notification.html#%E5%8D%95%E7%8B%AC%E5%BC%95%E7%94%A8
 * */
window.notifyClear = function () {
  return ElNotification.closeAll()
}







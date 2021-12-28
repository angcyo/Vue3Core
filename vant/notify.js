/**
 *
 * https://vant-contrib.gitee.io/vant/v3/#/zh-CN/notify
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/08
 */

import {Notify} from "vant"
import {wrapObj} from "../axios/http"

/**
 * Notify({
 *   message: '自定义颜色',
 *   color: '#ad0000',
 *   background: '#ffe1e1',
 * });
 *
 * Notify({
 *   message: '自定义时长',
 *   duration: 1000,
 * });
 *
 * 展示时长(ms)，值为 0 时，notify 不会消失
 * */

window.notify = (options) => {
  return Notify(options)
}

// 主要通知
window.notifyPrimary = (options) => {
  return Notify({
    type: 'primary',
    ...wrapObj(options, 'message')
  })
}

// 成功通知
window.notifySuccess = (options) => {
  return Notify({
    type: 'success',
    ...wrapObj(options, 'message')
  })
}

// 危险通知
window.notifyDanger = (options) => {
  return Notify({
    type: 'danger',
    ...wrapObj(options, 'message')
  })
}

// 警告通知
window.notifyWarning = (options) => {
  return Notify({
    type: 'warning',
    ...wrapObj(options, 'message')
  })
}

// 清除通知
window.notifyClear = function () {
  return Notify.clear()
}







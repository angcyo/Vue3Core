/**
 * https://vant-contrib.gitee.io/vant/v3/#/zh-CN/toast
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

import {Toast} from "vant"
import {wrapObj} from "../axios/http"

/**
 * forbidClick    是否禁止背景点击
 * overlay    是否显示背景遮罩层
 * */

/**
 * options?: string | ToastOptions
 * */
window.toast = function (options) {
  return Toast(options)
}

window.toastSuccess = function (options) {
  return Toast.success(options)
}

window.toastFail = function (options) {
  return Toast.fail(options)
}

window.toastLoading = function (options) {
  return Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
    ...wrapObj(options)
  })
}

/**清除toast
 * https://vant-contrib.gitee.io/vant/v3/#/zh-CN/toast#toastoptions-shu-ju-jie-gou
 * */
window.toastClear = function (all) {
  return Toast.clear(all)
}



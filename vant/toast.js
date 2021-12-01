/**
 * https://vant-contrib.gitee.io/vant/v3/#/zh-CN/toast
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

import {Toast} from "vant"

/**
 * forbidClick	是否禁止背景点击
 * overlay	是否显示背景遮罩层
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


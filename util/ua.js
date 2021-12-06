/**
 * https://angcyo.gitee.io/ua
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/06
 */

/**是否是微信客户端
 *
 * Mozilla/5.0 (Linux; Android 9.0; ONEPLUS A6000 Build/PKQ1.180716.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044306 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x260703AA) NetType/WIFI Language/zh_CN Process/tools
 * */
window.isWeiXinUA = function () {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('MicroMessenger'.toLowerCase()) > 0
}

/**是否是QQ客户端
 *
 * Mozilla/5.0 (Linux; Android 9.0; ONEPLUS A6000 Build/PKQ1.180716.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044303 Mobile Safari/537.36 V1_AND_SQ_7.8.8_942_YYB_D QQ/7.8.8.3790 NetType/WIFI WebP/0.3.0 Pixel/1080 StatusBarHeight/80
 * */
window.isQqUA = function () {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('MQQBrowser'.toLowerCase()) > 0
}

/**是否是企业微信客户端
 *
 * Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045410 Mobile Safari/537.36 wxwork/3.1.6 MicroMessenger/7.0.1 NetType/WIFI Language/zh Lang/zh
 * */
window.isWxWorkUA = function () {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('wxwork'.toLowerCase()) > 0
}

/**是否是移动浏览器
 *
 * view-source:http://shared.ydstatic.com/dict/math/pc_downloadBarcde.html
 * */
window.isMobileUA = function () {
  const ua = navigator.userAgent
  return !!ua.match(/Mobile/)
}


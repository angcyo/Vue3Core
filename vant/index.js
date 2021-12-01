/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

/**这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用。
 * https://vant-contrib.gitee.io/vant/v3/#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei*/
import '@vant/touch-emulator'
import {Toast} from "vant"
import './toast'

export default {

  init(app) {
    app.use(Toast)
  }

}

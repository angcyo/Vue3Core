/**
 * Vue3Core 初始化入口文件
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/11/27
 */

//js

//原生自动初始化
import './util/json'
import './util/local'
import './util/session'
import './util/url'
import './util/time'
import './util/str'
import './vueEx'

//库自动初始化, 需要npm安装对应的库
import './livedata'
import './vite'
import './vant'
import './dayjs'
import './lodash'

//模块引用
import Util from './util/util'
import {version} from 'vue'
import vConsole from './vConsole'
import Vant from './vant'

//css
import './css/base.css'
import './css/flex.css'
import './css/vue.css'

//http
import {http} from './axios/http'

//router
import {createRouter, createWebHashHistory} from 'vue-router'

/**日志方法*/
window.log = function () {
  if (isDebug) {
    let stack = Util.error().stack
    //let lines = stack.toString().split(/\r\n|\n/)
    //console.log(`%c↓${lines[3].replaceAll(":", ";")}↓`, "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:1.2em")
    //console.log(`%c↓${lines[3].replaceAll(":", ".")}↓`, 'color: purple; font-size: 0.6em; text-shadow: 1px 1px 3px rgba(255, 0, 0, 0.5)')
    console.log(...arguments, '←\n\n→', stack)
  }
}

const Vue3Core = {

  /**请调用此方法初始化
   * [app] vue应用的实例,[App<HostElement = any>]*/
  init(app) {
    log(`开始初始化[Vue3Core]: Vue ${version}`)
    // 挂在全局方法
    //app.config.globalProperties.$filters = dateTimeSub
    //log(app)

    //初始化
    Vant.init(app)

    //console 初始化
    vConsole.init(app)
  },

  /**初始化路由
   * [options] [RouterOptions]
   * 返回[Router]*/
  initRouter(app, options) {
    const router = createRouter({
      history: createWebHashHistory(),
      //https://next.router.vuejs.org/zh/guide/advanced/scroll-behavior.html
      scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        // 始终滚动到顶部
        return {top: 0}
      },
      ...options
    })
    app.use(router)
    return router
  },

  /**初始化网络
   * 返回[http]*/
  initHttp(baseUrl, config) {
    http.init(baseUrl, config)
    return http
  }
}

export default Vue3Core


/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */
import VConsole from "vconsole"

export default {

  /**初始化*/
  init: function (app) {
    if (isDebug) {
      // remove it when you finish debugging
      //vConsole.destroy();
      return new VConsole({
        maxLogNumber: 100
      })
    }
    return undefined
  }
}

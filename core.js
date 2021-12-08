/** 静态存储
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/06
 */

const core = {

  /**
   * VUE 的实例
   * [App<HostElement>]*/
  app: undefined,

  /**
   * 路由实例
   * [Router]
   * */
  router: undefined,

  /**
   * http 实例
   * [createHttp]
   * */
  http: undefined,

  /**代码加载时间*/
  loadTime: nowTimeString(),

  /**项目编译时间*/
  buildTime: '2021-12-8 09:48:33',
}

export default core

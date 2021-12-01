/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

/**现在的时间戳 13位, 毫秒
 * [number] 1638338545000 */
window.nowTime = () => {
  //new Date().getTime()
  return Date.parse(`${new Date()}`)
}


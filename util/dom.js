/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/29
 */

window.back = function () {
  history.back()
}

window.forward = function () {
  history.forward()
}

/**
 * delta – 您要移动到的历史记录中相对于当前页面的位置。
 * 负值向后移动，正值向前移动。
 * 因此，例如， history.go(2)向前移动两页，
 * 而history.go(-2)向后移动两页。
 * 如果未传递任何值或delta等于 0，
 * 则其结果与调用location.reload() 。
 * */
window.go = function (delta) {
  history.go(delta)
}

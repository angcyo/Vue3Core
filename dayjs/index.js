/**
 *  https://dayjs.gitee.io/zh-CN/
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

// 返回距 1970 年 1 月 1 日之间的毫秒数：
// https://www.runoob.com/jsref/jsref-gettime.html
window.currentTimeMillis = () => new Date().getTime()

// 格式化当前时间
window.nowTimeString = (template = 'YYYY-MM-DD HH:mm:ss:SSS') => dayjs().format(template)

/**格式化时间*/
Number.prototype.formatTime = function (template = 'YYYY-MM-DD HH:mm:ss:SSS') {
  return dayjs(this).format(template)
}
Number.prototype.year = function () {
  return _year(this)
}
Number.prototype.month = function () {
  return _month(this)
}
Number.prototype.day = function () {
  return _day(this)
}
Number.prototype.hour = function () {
  return _hour(this)
}
Number.prototype.minute = function () {
  return _minute(this)
}
Number.prototype.time = function () {
  return _time(this)
}

/**
 * 返回时间毫秒数millisecond对应的年份信息 https://day.js.org/docs/zh-CN/display/format
 *
 * @param time 支持13位毫秒数, 10位毫秒数, 支持格式化的时间19920101
 * */
window._year = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("YYYY"))
//月份，从 1 开始 [1-12]
window._month = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("M"))
//1-31	月份里的一天
window._day = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("D"))
//0-23	小时
window._hour = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("H"))
//0-59	分钟
window._minute = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("m"))
//0-59	秒
window._second = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("s"))
//000-999	毫秒 三位数
window._time = (time = dayjs().valueOf()) => parseInt(dayjs(time).format("SSS"))

/**
 * 返回指定单位下两个日期时间之间的差异。
 *
 * @param unit
 * 支持的单位列表
 * 单位         缩写    详情
 * day          d     星期几 (星期天0，星期六6)
 * week         w     Week of Year
 * quarter      Q     Quarter
 * month        M     月份 (一月 0， 十二月 11)
 * year         y     Year (未满365天, 返回0, 366天, 返回1)
 * hour         h     Hour
 * minute       m     Minute
 * second       s     Second
 * millisecond  ms    Millisecond
 * https://day.js.org/docs/zh-CN/display/difference
 *
 * @param bigTime 较大的时间
 * @param smallTime 较小的时间
 * @param float 默认情况下 dayjs#diff 会将结果进位成整数。 如果要得到一个浮点数，将 true 作为第三个参数传入。
 * */
window.diff = (bigTime, smallTime, unit = 'millisecond', float = false) => dayjs(bigTime).diff(smallTime, unit, float)

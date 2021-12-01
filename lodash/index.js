/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */

import _ from 'lodash'

/**https://lodash.com/docs/4.17.15#endsWith*/
String.prototype.endsWidth = function (target, position) {
  return _.endsWith(this, target, position)
}

/**https://lodash.com/docs/4.17.15#startsWith*/
String.prototype.startsWith = function (target, position) {
  return _.startsWith(this, target, position)
}

/**https://lodash.com/docs/4.17.15#trimStart*/
String.prototype.trimStart = function (chars) {
  return _.trimStart(this, chars)
}

/**https://lodash.com/docs/4.17.15#trimEnd*/
String.prototype.trimEnd = function (chars) {
  return _.trimEnd(this, chars)
}

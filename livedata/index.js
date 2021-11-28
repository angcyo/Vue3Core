/**
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/11/28
 */

import {LiveData} from '@jonasrottmann/livedata'

/**全局方法*/
window.liveData = function (initialValue, onActive, onInactive) {
  return new LiveData(initialValue, onActive, onInactive)
}

/**
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/07
 */

import Util from "./util"

/**
 * [action] 需要执行的操作, 返回值会传给[resolve], 异常会传给[reject]
 * */
window.promise = function (action) {
  const that = this
  return new Promise((resolve, reject) => {
    // ?做一些异步操作，最终会调用下面两者之一:
    //
    //   resolve(someValue); // fulfilled
    // ?或
    //   reject("failure reason"); // rejected
    try {
      //返回监听
      const actionResult = (res, reason) => {
        if (reason) {
          //异常
          reject(reason)
        } else {
          resolve(res)
        }
      }
      //执行
      action.bind(that)
      const result = action(actionResult)
      //结果处理
      if (result === undefined) {
        //action本身无返回值, 则需要调用[actionResult]触发返回
      } else if (Util.isPromise(result)) {
        result.then(res => {
          resolve(res)
        }).catch(reason => {
          reject(reason)
        })
      } else {
        resolve(result)
      }
    } catch (error) {
      reject(error)
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
  })
}

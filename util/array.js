/**
 * MDN 数组文档
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
 *
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/07
 */

//<editor-fold desc="数组扩展操作">

import Util from "./util"

/**
 * 将数组`target`合并到`this`, 条件是`callbackfn`返回true
 * @param target 需要合并的数组
 * @param callbackFn 第一个参数是需要返回的数组, 第二个参数需要合并的数据
 * @return *[]
 * */
Array.prototype.merge = function (target, callbackFn) {
  let result = [...this]
  if (Util.isArray(target)) {
    target.forEach(item => {
      if (callbackFn(result, item)) {
        result.push(item)
      }
    })
  } else {
    if (Util.isFunction(callbackFn)) {
      if (callbackFn(result, target)) {
        result.push(target)
      }
    }
  }
  return result
}

/** 获取数组中的第一个元素 */
Array.prototype.first = function (index = 0) {
  if (Util.isArray(this)) {
    if (this.length > index) {
      return this[index]
    } else {
      return undefined
    }
  }
  return this
}

/** 如果指定的元素不存储, 则获取第一个 */
Array.prototype.firstIfNotExist = function (el, index = 0) {
  if (Util.isArray(this)) {
    if (this.indexOf(el) !== -1) {
      //找到了元素
      return el
    }
    if (this.length > index) {
      return this[index]
    } else {
      return undefined
    }
  }
  return this
}

/** 获取数组中的最后一个元素 */
Array.prototype.last = function () {
  if (Util.isArray(this)) {
    if (this.length > 0) {
      return this[this.length - 1]
    } else {
      return undefined
    }
  }
  return this
}

/**
 * 遍历数组, 等待上一次调用结束后, 再请求next
 * @param run 必须是一个对象, 且需要需要执行的方法放在`run`成员变量中, 并且调用`next`方法触发下一个回调
 * */
Array.prototype.eachRun = function (run) {
  if (Util.isObject(run) && run.run) {
    let index = 0

    let array = this
    let count = array.length

    let _run = function () {
      if (index >= count) {
        //结束
        run.run(undefined, true)
      } else {
        let item = array[index]
        run.run(item, false)
      }
    }

    //next回调
    run.next = function () {
      index++
      _run()
    }

    //开始执行
    _run()
  } else {
    console.log(`不合法对象↓`)
    console.log(run)
  }
}

/**移除数组中指定索引的数据, 返回删除的元素
 * @param index 可以指定索引, 也支持是`indexOf`能够查询到的对象
 * */
Array.prototype.removeIt = function (index) {
  let _index = index
  if (Util.isNumber(_index)) {
  } else {
    _index = this.indexOf(index)
    if (_index === -1) {
      return undefined
    }
  }
  //在VUE中可以实现双向绑定更新
  return this.splice(_index, 1)
}

/**从数组中, 移除指定条件的元素*/
Array.prototype.removeBy = function (predicate) {
  const removeIndexList = []
  this.forEach((item, index) => {
    if (predicate(item, index)) {
      removeIndexList.push(index)
    }
  })
  removeIndexList.reverse() //反序
  removeIndexList.forEach(item => {
    this.splice(item, 1)
  })
}

/**替换指定位置的元素
 * [items] 可以是数组, 也可以是单个新元素*/
Array.prototype.replaceAt = function (index, items) {
  if (Util.isArray(items)) {
    this.splice(index, 1, ...items)
  } else {
    this.splice(index, 1, items)
  }
}

/**替换指定位置的元素
 * 将指定条件的item, 更新为新item
 * */
Array.prototype.updateBy = function (newItem, predicate) {
  const updateIndexList = []
  this.forEach((item, index) => {
    if (predicate(item, index)) {
      updateIndexList.push(index)
    }
  })
  updateIndexList.forEach(indexItem => {
    this[indexItem] = newItem //全量赋值, VUE3中可以监听到
    //this.replaceAt(item, newItem) //这样也可以
    //2个方法都可以
    //this[0] = item
    //this.replaceAt(0, item)
  })
}

/**清空数组所有数据
 * 返回的是被删除的数据*/
Array.prototype.clearAll = function () {
  return this.splice(0)
}

/**重置数组
 * 返回的是被删除的数据*/
Array.prototype.reset = function (newArray) {
  if (Util.isArray(newArray)) {
    return this.splice(0, this.length, ...newArray)
  } else {
    return this.splice(0, this.length, newArray)
  }
}

/**使用JSON的方式, 拷贝数据. 深拷贝*/
Array.prototype.copy = function () {
  return JSON.parse(JSON.stringify(this))
}

/*Object.prototype.copy = function () {
  return JSON.parse(JSON.stringify(this))
}*/

/**判断数组中是否有指定的数据
 * [predicate] 条件回调函数*/
Array.prototype.have = function (predicate) {
  let find = this.find(predicate)
  return find !== undefined
}

/**数组排序, 默认是降序返回[desc]
 * [compareKey] 排序的字段, 可以是字符串(对象中的字段key值),和方法
 * 返回 排序后的数组*/
Array.prototype.sortBy = function (compareKey, desc) {
  const _desc = desc || true

  if (Util.isFunction(compareKey)) {
    return this.sort(compareKey)
  } else {
    return this.sort((firstEl, secondEl) => {
      if (_desc) {
        //降序
        return secondEl[compareKey] - firstEl[compareKey]
      } else {
        //升序
        return firstEl[compareKey] - secondEl[compareKey]
      }
    })
  }
}

/**在数组中的指定位置插入, 一个或多个数据*/
Array.prototype.insetAt = function (index, items) {
  if (Util.isArray(items)) {
    this.splice(index, 0, ...items)
  } else {
    this.splice(index, 0, items)
  }
  return this
}

/**数组是否包含数据*/
Array.prototype.contains = function (item) {
  return this.indexOf(item) !== -1
}

//</editor-fold desc="数组扩展操作">

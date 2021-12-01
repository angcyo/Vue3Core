# 2021-11-27

# Vue3 介绍

https://v3.cn.vuejs.org/guide/introduction.html

## Vue3 API

https://v3.cn.vuejs.org/api/

## 生态

- [Vue Router](https://next.router.vuejs.org/zh/introduction.html)
- [Vuex](https://next.vuex.vuejs.org/zh/index.html)
- [Vite](https://cn.vitejs.dev/guide/)

## 组合式API

https://v3.cn.vuejs.org/api/composition-api.html

## 响应式API

https://v3.cn.vuejs.org/api/basic-reactivity.html#%E5%93%8D%E5%BA%94%E6%80%A7%E5%9F%BA%E7%A1%80-api

# 使用

## 生命周期

https://v3.cn.vuejs.org/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA

## 生命周期钩子

https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html

选项式 API|Hook inside setup
---|---
beforeCreate|Not needed*
created|Not needed*
beforeMount|onBeforeMount
mounted|onMounted
beforeUpdate|onBeforeUpdate
updated|onUpdated
beforeUnmount|onBeforeUnmount
unmounted|onUnmounted
errorCaptured|onErrorCaptured
renderTracked|onRenderTracked
renderTriggered|onRenderTriggered
activated|onActivated
deactivated|onDeactivated


## 单文件组件 `<script setup>`

https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6-script-setup

## v-on (@)

https://v3.cn.vuejs.org/api/directives.html#v-on

### 修饰符：

- .stop - 调用 event.stopPropagation()。
- .prevent - 调用 event.preventDefault()。
- .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyAlias} - 仅当事件是从特定键触发时才触发回调。
- .once - 只触发一次回调。
- .left - 只当点击鼠标左键时触发。
- .right - 只当点击鼠标右键时触发。
- .middle - 只当点击鼠标中键时触发。
- .passive - { passive: true } 模式添加侦听器


# main.js

示例

```js
import {createApp} from 'vue'
import App from './App.vue'
import Vue3Core from '../Vue3Core'
import RouteConfig from './route.config'

const app = createApp(App)

//核心库
Vue3Core.init(app)

//路由
const router = Vue3Core.initRouter(app, {
  routes: RouteConfig
})

router.beforeEach((to, from) => {
  return true
})

//网络初始化
//Vue3Core.initHttp("http://dev.spmt.fun:9203/")
Vue3Core.initHttp("http://localhost:9203/")

//安装
app.mount('#app')

```

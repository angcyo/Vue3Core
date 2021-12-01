# 2021-11-27

轻量、可靠的移动端 Vue 组件库

https://youzan.github.io/vant/v3/#/zh-CN

```
# Vue 3 项目，安装 Vant 3：
npm i vant@next -S

# Vue 3 项目，安装 Vant 3
npm i vant@3
```

## 在 Vite 项目中按需引入组件

https://youzan.github.io/vant/v3/#/zh-CN/quickstart#fang-shi-er.-zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian

```
# 安装插件
npm i vite-plugin-style-import -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
};
```

# 进阶用法

https://youzan.github.io/vant/v3/#/zh-CN/advanced-usage

## 浏览器适配

https://youzan.github.io/vant/v3/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei

## 桌面端适配

https://vant-contrib.gitee.io/vant/v3/#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei

Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 touch 事件，没有监听桌面端的 mouse 事件。

如果你需要在桌面端使用 Vant，可以引入我们提供的 @vant/touch-emulator，这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用。

```
# 安装模块
npm i @vant/touch-emulator -S

// 引入模块后自动生效
import '@vant/touch-emulator';
```

## 全局注册

```js
import {Button} from 'vant';
import {createApp} from 'vue';

const app = createApp();

// 方式一. 通过 app.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
app.use(Button);

// 方式二. 通过 app.component 注册
// 注册完成后，在模板中通过 <van-button> 标签来使用按钮组件
app.component(Button.name, Button);
```

## 局部注册

```js
import {Button} from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
};
```

```js
<script setup>
  import {Button} from 'vant';
</script>

<template>
  <Button/>
</template>
```

# 图标

https://youzan.github.io/vant/v3/#/zh-CN/icon

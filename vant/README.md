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

## 全局注册

```js
import { Button } from 'vant';
import { createApp } from 'vue';

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
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
};
```

```js
<script setup>
  import { Button } from 'vant';
</script>

<template>
  <Button />
</template>
```

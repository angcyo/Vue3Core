# 2021-11-27

# Vite指引

https://cn.vitejs.dev/guide/

# Vite配置

https://cn.vitejs.dev/config/

## 环境变量和模式

https://cn.vitejs.dev/guide/env-and-mode.html

# 使用

> Vite 需要 Node.js 版本 >= 12.0.0。

```
npm init vite@latest
```

然后按照提示操作即可！

## `index.html` 与项目根目录

https://cn.vitejs.dev/guide/#index-html-and-project-root

# 配置 

https://vitejs.cn/config/#server-host

```
export default defineConfig({
  server: {
    host: true, //开启监听所有地址
  },
})
```

```
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()]
})
```

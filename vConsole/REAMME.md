# 2021-12-12

一个轻量、可拓展、针对手机网页的前端开发者调试面板。

vConsole 是微信小程序的官方调试工具。

https://github.com/Tencent/vConsole

https://github.com/Tencent/vConsole/blob/dev/README_CN.md

https://www.npmjs.com/package/vconsole

# 安装

```
npm install vconsole
```

```js
import VConsole from 'vconsole';

const vConsole = new VConsole();
// or init with options
const vConsole = new VConsole({maxLogNumber: 1000});

// call `console` methods as usual
console.log('Hello world');

// remove it when you finish debugging
vConsole.destroy();
```

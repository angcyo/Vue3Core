# 2021-11-28

Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js

https://axios-http.com/zh/

https://github.com/axios/axios

```js
import axios from "axios";
axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
```

# 起步

https://axios-http.com/zh/docs/intro

## 安装

```
npm install axios
```

## 使用

```js
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```

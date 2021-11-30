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

```
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```

## 请求配置

https://axios-http.com/zh/docs/req_config

## 响应结构

https://axios-http.com/zh/docs/res_schema

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  headers: {},

  // `config` 是 `axios` 请求的配置信息
  config: {},

  // `request` 是生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: {}
}
```



/*环境变量#
Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：
import.meta.env.MODE: {string} 应用运行的模式。
import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。
import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。*/

/*{
  "BASE_URL": "/",
    "MODE": "development",
    "DEV": true,
    "PROD": false,
    "SSR": false
}*/
console.log(import.meta.env)

//console.log(import.meta.env.MODE) //development
//console.log(import.meta.env.PROD) //false


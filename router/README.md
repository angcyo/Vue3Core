# 2021-11-27

https://next.router.vuejs.org/zh/index.html

```
npm install vue-router@4
```

# 入门

https://next.router.vuejs.org/zh/guide/

# API 参考

https://next.router.vuejs.org/zh/api/


# 服务器配置示例

https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B

```
location / {
  try_files $uri $uri/ /index.html;
}
```

# 使用

```
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

## 查看现有路由

Vue Router 提供了两个功能来查看现有的路由：

```
router.hasRoute()：检查路由是否存在。
router.getRoutes()：获取一个包含所有路由记录的数组。
```


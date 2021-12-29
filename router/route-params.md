# 2021-12-29

## 路由参数

https://next.router.vuejs.org/zh/api/#routelocationraw

### 声明一个路由

```
{
    name: "contestDetail",
    path: "/contestDetail/:contestId",
    component: ContestDetail,
}
```

### 传递参数

```
const router = useRouter()

const showContestDetail = (contest) => {
  router.push({
    name: 'contestDetail', params: {
      contestId: contestId
  })
}

```

### 接收路由参数

```
const route = useRoute()
log(route.params)
const contestId = route.params.contestId
```

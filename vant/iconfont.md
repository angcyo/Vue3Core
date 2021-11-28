# 2021-11-28

在`Vant`中使用`iconfont`

https://www.iconfont.cn/

## 项目设置

需要在`iconfont`项目设置中

- 1: 设置`FontClass/Symbol前缀`: `iconfont-`
- 2: 设置`Font Family`: `iconfont`

## 在`html`引入样式

```html
<!--iconfont图标-->
<link href="//at.alicdn.com/t/font_2970886_idw0ecxybg.css" rel="stylesheet">
```

# 示例

使用的时候需要去掉前缀`iconfont-`

```
<Icon class-prefix="iconfont" name="yundongbisai"/>

<TabbarItem icon-prefix="iconfont" icon="yundongbisai" replace to="/main/contest">比赛</TabbarItem>
```

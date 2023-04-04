# 开发记录

## 问题记录

1. APP 顶部状态栏遮挡页面内容

原因：将页面高度设置为 `100vh` 时，`100vh` 中是包含有顶部状态栏区域高度的。

解决：[官方方案](https://uniapp.dcloud.net.cn/collocation/pages.html#customnav)

---

2. 登录页「忘记密码」弹窗中键盘弹出后，手势侧滑一次关闭键盘，再次点击表单输入框，键盘弹起后会覆盖了部分弹窗内容

原因：软键盘的模式问题。

解决：修改 `pages.json` 文件中需要弹出键盘的页面 `app-plus` 属性中的 `softinputMode` 键盘弹出模式：

```json
{
  "path": "pages/login/login",
  "style": {
    "navigationBarTitleText": "",
    "app-plus": {
      "softinputMode": "adjustResize"
    }
  }
},
```

---

3. 登录页「忘记密码」弹窗中键盘弹出后,弹窗下方页面内容被顶上去了，并出现滚动条。

原因：软键盘弹起时，软键盘底部的一块区域占据了页面部分位置，导致内容被撑开。

解决：只需要给弹窗下方页面容器添加 `overflow:hidden` 阻止页面滚动即可。

---

4. App 端 tabBar 使用字体图标时，图标很小，但是测试 H5 端不存在该问题

原因：App、H5 端存在平台差异。

解决： `pages.json` 文件 `tabBar -> list -> iconfont -> fontSize` 可以设置字体图标大小。

## 功能记录

## Get 新知识

1. 子组件中定义的 `boolean` 类型 `props` 参数，父组件不传入该参数的情况下，子组件默认收到的就是 false。

```vue
<!-- 父组件 -->
<Son />

<!-- 子组件 <Son/> -->
<script lang="ts" setup>
defineProps<{
  flag?: boolean // 父组件中没传入该参数，拿到的是 false，而不是 undefined
}>()
</script>
```

---

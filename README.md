# 基于`Vite`的`React`后台管理系统

## 项目预览
[Github Page](https://happy-func.github.io/vite-react/ "Vite-React")

> 不得不说的是`webpack`开发热重载的速度一直让人比较难受，尤其是当项目越发庞大的时候。启动项目、重载项目的耗时较长，耽误了开发时长，拖缓了开发节奏。
> >这个时候`Vite`的出现委实让人眼前一亮。
> >>闲话少说，介绍一下项目应用的技术栈吧。

| Package | Version | 感想 |
| :---: | :---: | :---: |
| react | 17.0.0 | 略 |
| react-router-dom | 5.2.0 | 略 |
| react-redux | 7.2.4 | 繁琐的状态维护 |
| echarts | 5.1.1 | 有点重 |
| antd | 4.15.2 | Css资源较重 |
| dayjs | 1.10.4 | 很轻量 |
| js-cookie | 2.1.1 | 轻量 |
| react-window | 1.8.6 | 长列表优化神器 |
| wangeditor | 4.6.17 | 轻量简洁的富文本编辑器 |

## 目标
> 后台管理系统
>> 大部分内容基于`antd`来进行布局操作，登录页面`UI`使用了`material-ui`（用不习惯，后续考虑移除）。
>
>> 使用`js-cookie`来操作`cookie`。
>
>> 使用`dayjs`来做时间格式化。

## 约定
### 文件夹约定

- `constant`项目常量配置
  - `Regex.ts`正则配置
  - `StorageKey.ts`本地化存储`key`配置
- `components`公共组件配置
- `page`页面配置
- `router`路由配置
- `store`全局状态维护配置
- `utils`公共方法配置
- `app.scss`全局样式配置

### 路由约定

- `name`路由`key`配置，特性`unique`
- `path`路由路径配置
- `exact`是否路由严格模式
- `component`页面组件，采取懒加载使用`lazy`导入
- `meta`其他配置

  - `title`标题（侧边栏）配置
  - `icon`侧边栏图标配置

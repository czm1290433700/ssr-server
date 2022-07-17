# ssr 最简 demo 项目

掘金小册 《官网开发指南》 - 第 3 章 《架构原理：实现一个简易服务器端渲染》 demo 项目

## 项目启动

```
npm install
npm run build:client
npm run build:server
npm run start
```

### 热更新

nodemon 已经内置对 node 代码修改的热更新，但是因为我们执行的其实是构建编译后的产物，如果要保证结果的实时更新，需要另开两个终端分别执行
`npm run build:client`和`npm run build:server`, webpack 的构建已经保持监听的状态

感兴趣的同学也可以用 webpack 的 devServer 来实现，大体思路就是再启一个 webpack 的 serve 用于监听热更新，热更新后更新页面的 window.location 即可

## 目录结构

// 最后更新

## 其他命令

- 手动 lint `npm run lint`
- 重新构建 husky 钩子 `npm run prepare`, 不调整 commit 规则一般用不上，已配置好

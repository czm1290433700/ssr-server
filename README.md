# ssr 最简 demo 项目

掘金小册 《官网开发指南》 - 第 3 章 《架构原理：实现一个简易服务器端渲染》 demo 项目

## 项目启动

```
npm install
npm run build // 如果第一次启动需要执行`npm run build`, 服务器端渲染引入的静态脚本是指向构建文件的
npm run start
```

编辑代码需要重新 build, 考虑加一下热更新

## 目录结构

// 最后更新

## 其他命令

- 手动 lint `npm run lint`
- 重新构建 husky 钩子 `npm run prepare`, 不调整 commit 规则一般用不上，已配置好

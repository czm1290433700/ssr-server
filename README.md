# ssr 最简 demo 项目

掘金小册 《SSR 实战：官网开发指南》 - 原理篇 demo 项目

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

## nodejs 调试

已经内置 launch.json， 不需要对 program 相关参数进行调整

### 具体步骤

- 关闭`npm run start`服务器
- 切到需要调试的文件按 F5 即可

**server/index.tsx 直接是没办法用 ts-node 来执行的, 包含需要 webpack 编译的别名，切到 server_build/bundle.js 下按 F5 调试即可**

## 目录结构

```
│ .eslintrc.js // eslint 配置文件
│ .gitignore // git 上传忽略
│ commitlint.config.js // commitlint 配置
│ package-lock.json // 依赖锁
│ package.json
│ README.md
│ tsconfig.json // TS 配置
│ webpack.base.js // 通用 webpack 配置
│ webpack.client.js // 客户端打包
│ webpack.server.js // 服务端打包
│
├─.husky // 预提交钩子
│ │ pre-commit
│ │
│ └─\_
│ .gitignore
│ husky.sh
│
├─.vscode // NODEJS 调试
│ launch.json
│
├─client_build // 客户端打包
│ index.js
│
├─server_build // 服务端打包
│ bundle.js
│
└─src
│ router.tsx
│
├─client
│ index.tsx // 客户端入口
│
├─pages
│ ├─Demo
│ │ │ index.tsx
│ │ │
│ │ └─store
│ │ demoReducer.ts  
 │ │ index.ts
│ │
│ └─Home
│ index.tsx
│
├─server
│ index.tsx // 服务端入口文件
│
├─store
│ index.ts // 同构的缓存
│
└─utils
type.ts // 通用的一些 ts 类型
```

## 其他命令

- 手动 lint `npm run lint`
- 重新构建 husky 钩子 `npm run prepare`, 不调整 commit 规则一般用不上，已配置好

# ssr 最简 demo 项目

掘金小册 《官网开发指南》 - 第 3 章 《架构原理：实现一个简易服务器端渲染》 demo 项目

## 项目启动

### 直接执行

```
npm install
npm run dev
```

### 执行生产文件

```
npm install
npm run prod
```

## 目录结构

│ .eslintrc.js
│ .gitignore
│ commitlint.config.js
│ package-lock.json
│ package.json
│ README.md
│ tsconfig.json
│
├─.husky
│ │ pre-commit
│ │
│ └─\_
│ .gitignore
│ husky.sh
│
└─src
│ index.tsx
│
└─pages
home.tsx

## 其他命令

- 手动 lint `npm run lint`
- 重新构建 husky 钩子 `npm run prepare`, 不调整 commit 规则一般用不上，已配置好

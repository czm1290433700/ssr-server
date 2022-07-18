import express from "express";
import childProcess from "child_process";
import path from "path";
import { Route, Routes } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { matchRoutes, RouteObject } from "react-router-dom";
import router from "@/router";

const app = express();

const bodyParser = require("body-parser");

// 请求body解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 注入事件处理的脚本
app.use(express.static(path.resolve(process.cwd(), "client_build")));

// demo api
app.post("/api/getDemoData", (req, res) => {
  res.send({
    data: req.body,
    status_code: 0,
  });
});

app.get("*", (req, res) => {
  // 匹配当前路由的routes
  const routeMap = new Map<string, () => Promise<any>>(); // path - loaddata 的map
  router.forEach((item) => {
    if (item.path && item.loadData) {
      routeMap.set(item.path, item.loadData);
    }
  });
  const matchedRoutes = matchRoutes(router as RouteObject[], req.path);

  const promises: Array<() => Promise<any>> = [];
  matchedRoutes?.forEach((item) => {
    if (routeMap.has(item.pathname)) {
      promises.push(routeMap.get(item.pathname) as () => Promise<any>);
    }
  });
  Promise.all(promises).then((res) => {
    // 统一放到state里
    console.log(res);
  });

  // 编译需要渲染的JSX, 转成对应的HTML STRING
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes>
        {router?.map((item, index) => {
          return <Route {...item} key={index} />;
        })}
      </Routes>
    </StaticRouter>
  );

  res.send(`
  <html
    <head>
      <title>ssr-server</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("ssr-server listen on 3000");
});

childProcess.exec("start http://127.0.0.1:3000");

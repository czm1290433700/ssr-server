import express from "express";
import childProcess from "child_process";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Router from "@/router";

const app = express();

// 注入事件处理的脚本
app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.get("*", (req, res) => {
  // 编译需要渲染的JSX, 转成对应的HTML STRING
  const content = renderToString(
    <StaticRouter location={req.path}>{Router()}</StaticRouter>
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

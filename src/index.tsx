import express from "express";
import { renderToString } from "react-dom/server";
import Home from "./pages/home";

const app = express();
const content = renderToString(<Home />); // 编译需要渲染的JSX, 转成对应的HTML STRING

app.get("/", (req, res) => {
  // 响应给客户端的HTML
  const htmlDOM = `
  <html
    <head>
      <title>ssr-server</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
  `;

  res.send(htmlDOM);
});

app.listen(3000, () => {
  console.log("ssr-server listen on 3000");
});

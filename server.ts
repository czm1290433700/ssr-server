import { Console } from "console";
import express from "express";
const app = express();

// 纯静态ssr DEMO
// app.get("/", (req, res) => {
//   res.send(`
//     <html>
//         <head>
//             <title>ssr-server</title>
//         </head>
//         <body>
//             <h1>hello ssr</h1>
//         </body>
//     </html>
//     `);
// });

app.listen(3000, () => {
  console.log("ssr-server listen on 3000");
});

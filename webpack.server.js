const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "/src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "build"),
  },
});

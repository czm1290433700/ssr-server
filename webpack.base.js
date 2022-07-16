const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      fs: false,
      async_hooks: false,
      net: false,
    },
  },
  plugins: [new NodePolyfillPlugin()],
};

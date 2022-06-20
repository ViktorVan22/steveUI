const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    steveUI: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"), // 输出路径
    library: "steveUI", // library名称
    libraryTarget: "umd", // 输出格式为umd
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "steveUI",
      template: "index.html",
    }),
  ],
};

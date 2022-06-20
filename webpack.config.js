const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    steveUI: "./lib/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
      {
        test: /icons.+\.svg$/,
        loader: "svg-sprite-loader",
      },
    ],
  },
};

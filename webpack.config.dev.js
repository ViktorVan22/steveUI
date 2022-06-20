const base = require("./webpack.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "steveUI",
      template: "index.html",
    }),
  ],
});

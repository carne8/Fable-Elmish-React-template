const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")

const isProduction = !process.argv.find(v => v.indexOf("webpack-dev-server") !== -1)

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "eval-source-map",
  entry: "./src/Main.fs.js",
  output: {
    path: path.resolve(__dirname, "output/"),
    filename: isProduction ? "[name].[contenthash].js" : "[name].js",
    publicPath: "auto"
  },
  devServer: {
    port: 8080,
    proxy: undefined,
    host: "0.0.0.0",
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: "/index.html" }
      ]
    }
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*)?$/,
        type: 'asset/resource'
      }
    ],
  }
}
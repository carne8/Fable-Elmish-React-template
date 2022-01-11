const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require('dotenv-webpack')

// export the configuration as an object
module.exports = {
  mode: "development",
  entry: "./src/Main.fs.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "out/"),
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: { implementation: require("sass") }
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*)?$/,
        use: ["file-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".js"],
  }
}
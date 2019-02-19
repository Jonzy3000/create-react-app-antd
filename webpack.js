const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const srcPath = path.resolve(__dirname, "./src");
const distPath = path.resolve(__dirname, "./dist");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true
  },
  entry: path.resolve(srcPath, "index.js"),
  output: {
    path: distPath,
    filename: "[name]-[contenthash:20].js",
    publicPath: "/"
  },
  // Allows ts(x) and js files to be imported without extension
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["react", "stage-3"]
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader"
      // },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader", "image-webpack-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name]-[contenthash:20].css" }),
    htmlPlugin
  ]
};

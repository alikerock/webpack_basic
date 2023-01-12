const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    //웹팩을 통한 번들링(묶기) 시작점
    //index: "./src/index.js"
    index: path.join(__dirname, "src", "index.js"),
  },
  output: {
    // 하나의 파일로 번들링한 결과물을 설정
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
  },
  devServer: {
    static: "./dist",
  },
  // 플러그인 설정
  plugins: [
    new CleanWebpackPlugin(), // 웹팩 실행시마다 dist 폴더 정리
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 적용될 html 경로
      filename: "./index.html", // 결과 파일명
      hash: true, // 모든 스크립트, css 파일에 고유한 컴파일 해시 추가하여 캐시를 무효화
      showErrors: true, // 오류 정보가 html에 기록됨
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
      hash: true,
      showErrors: true,
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        //use: ["style-loader", "css-loader"],

        exclude: /node_modules/,
      },
    ],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: "./dist",
  },
  // 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 적용될 html 경로
      filename: "./index.html", // 결과 파일명
      hash: true, // 모든 스크립트, css 파일에 고유한 컴파일 해시 추가하여 캐시를 무효화
      showErrors: true, // 오류 정보가 html에 기록됨
    }),
  ],
};

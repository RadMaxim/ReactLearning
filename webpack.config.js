const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // 👉 Точка входа
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "MyApp", // 👉 Глобальное имя (если нужен UMD)
    libraryTarget: "umd", // 'var', 'commonjs', 'amd', etc.
    globalObject: "this",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // 👈 Добавлено правило для CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM", // 👉 НЕ включать в бандл
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // если есть шаблон
      // или просто оставь пустым — создастся дефолтный
    }),
  ],
};

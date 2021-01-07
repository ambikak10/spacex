// const path = require("path");
// const HWP = require("html-webpack-plugin");
// module.exports = {
//   entry: path.join(__dirname, "/src/index.js"),
//   output: {
//     filename: "build.js",
//     path: path.join(__dirname, "/dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$|jsx/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         // use: "raw-loader",
//       },
//     ],
//   },
//   plugins: [new HWP({ template: path.join(__dirname, "/src/index.html") })],
// };

// const path = require("path");
// module.exports = {
//   entry: {
//     client: "./src/client.js",
//     bundle: "./src/bundle.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "assets"),
//     filename: "[name].js",
//   },
//   module: {
//     rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
//   },
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};

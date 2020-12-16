
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    
      {
        test: /\.(svg|png|jpg|gif|JPG)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};

const path = require("path");
const config = require("./webpack.config");
const { merge} = require("webpack-merge")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
    mode: "production",
    
    output: {
        filename: "rv-scripts.[hash].js",
        path: path.resolve(__dirname, "prod")
    },
    optimization: {
    minimize: true,
      minimizer: [
        new TerserPlugin(),
new OptimizeCSSAssetsPlugin({
  cssProcessorPluginOptions: {
    preset: ['default', { discardComments: { removeAll: true } }],
  }
}),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })
      ]
    },
    plugins: [new MiniCssExtractPlugin({filename: "rv-style.[hash].css"}), new CleanWebpackPlugin(), new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }) ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader , "css-loader", "sass-loader"]
        }]
    }
});
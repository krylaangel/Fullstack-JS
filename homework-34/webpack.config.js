const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    main: "./src/index.js",
    stat: "./src/statistic.js",
  },
  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@fonts": path.resolve(__dirname, "src/fonts/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/images/"),
    },
    extensions: [".js", ".jsx", ".json", ".css", ".jpg", ".png"], // Расширения, которые можно опускать при импорте
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[hash].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 8889 }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main", "stat"],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 8888,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 20000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

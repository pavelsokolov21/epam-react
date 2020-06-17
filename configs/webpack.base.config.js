const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  public: path.join(__dirname, "../public"),
};

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: ["babel-polyfill", `${PATHS.src}/index.tsx`],
  },

  output: {
    filename: "[name].[hash].bundle.js",
    path: `${PATHS.dist}`,
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "./postcss.config.js" },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "./postcss.config.js" },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      components: `${PATHS.src}/components`,
      containers: `${PATHS.src}/containers`,
      context: `${PATHS.src}/context`,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: `${PATHS.public}/index.html`,
      filename: `${PATHS.dist}/index.html`,
    }),
  ],
};

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, options) => {
    const prodMode = options.mode === "production";
    console.log(options.mode);
    return {
        entry: {
            index: ["./src/index.ts", "./src/assets/less/style.less"],
        },
        devServer: { contentBase: "./build" },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: ["src/stories", { from: "src/assets/images/3x", to: "img/3x" }],
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                title: "Stories",
                template: "src/index.html",
                favicon: "src/assets/images/1x/favicon-m-light.png",
            }),
            new MiniCssExtractPlugin({
                filename: "stories.css",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(le|c)ss$/i,
                    use: [
                        prodMode ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [autoprefixer],
                                },
                                sourceMap: true,
                            },
                        },
                        "less-loader",
                    ],
                },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                    },
                },
                {
                    test: /\.(svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img/",
                    },
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        output: {
            filename: "stories.[contenthash:8].js",
            path: path.resolve(__dirname, "build"),
        },
        performance: {
            maxEntrypointSize: 400000,
        },
        optimization: {
            minimizer: [new CssMinimizerPlugin()],
        },
        //чтобы в режиме dev был активен HMR
        target: prodMode ? "browserslist" : "web",
    };
};

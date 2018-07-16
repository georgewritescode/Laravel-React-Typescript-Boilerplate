var webpack = require("webpack");
var path = require("path");
var fs = require("fs");
// variables
var isProduction = process.argv.indexOf("-p") >= 0;
var sourcePath = path.join(__dirname, "./frontend");
var outPath = path.join(__dirname, "./public/dist");
var hostPort = 3333;
// plugins
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = {
    context: sourcePath,
    entry: {
        main: "./app.tsx"
    },
    output: {
        path: outPath,
        filename: "bundle.js",
        chunkFilename: "[chunkhash].js",
        publicPath: isProduction ? "/" : "https://localhost:" + hostPort + "/"
    },
    target: "web",
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".scss", "css", "pcss"],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // (jsnext:main directs not usually distributable es6 format, but es6 sources)
        mainFields: ["module", "browser", "main"],
        alias: {
            app: path.resolve(__dirname, "frontend/"),
            components: path.resolve(__dirname, "frontend/components/"),
            types: path.resolve(__dirname, "frontend/types/")
        }
    },
    module: {
        rules: [
            // .ts, .tsx
            {
                test: /\.tsx?$/,
                use: isProduction
                    ? "ts-loader"
                    : [
                          "babel-loader?plugins=react-hot-loader/babel",
                          "ts-loader"
                      ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                            // modifyVars: {}
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    // isProduction ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // css
            {
                test: [/\.pcss$/, /\.css$/],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            query: {
                                modules: true,
                                sourceMap: !isProduction,
                                importLoaders: 1,
                                localIdentName: "[local]__[hash:base64:5]"
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: [
                                    require("postcss-import")({
                                        addDependencyTo: webpack
                                    }),
                                    require("tailwindcss")("./tailwind.js"),
                                    require("postcss-url")(),
                                    require("postcss-cssnext")(),
                                    require("postcss-reporter")({
                                        clearReportedMessages: true
                                    })
                                ]
                            }
                        }
                    ]
                })
            },
            // static assets
            { test: /\.png$/, use: "url-loader?limit=10000" },
            { test: /\.jpg$/, use: "file-loader" }
        ]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new ExtractTextPlugin({
            filename: "styles.css",
            disable: !isProduction
        }),
        new ErrorOverlayPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new PurgecssPlugin({
        //     // Specify the locations of any files you want to scan for class names.
        //     paths: glob.sync([
        //         path.join(__dirname, "resources/views/**/*.blade.php"),
        //         path.join(__dirname, "frontend/**/*.*"),
        //     ])
        // })
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        inline: true,
        host: "127.0.0.1",
        port: hostPort,
        https: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        watchOptions: {
            exclude: [/bower_components/, /node_modules/]
        },
        historyApiFallback: {
            disableDotRule: true
        },
        stats: "minimal"
    },
    devtool: "cheap-module-eval-source-map",
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: "empty",
        net: "empty"
    }
};

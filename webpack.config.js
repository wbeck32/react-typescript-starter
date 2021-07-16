"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const webpack_1 = __importDefault(require("webpack"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const webpackConfig = env => ({
    ...(env.production || !env.development ? {} : { devtool: "eval-source-map" }),
    entry: path_1.default.join(__dirname, "/src/index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        fallback: { "http": false },
        plugins: [new tsconfig_paths_webpack_plugin_1.TsconfigPathsPlugin({
                logLevel: "INFO",
                logInfoToStdOut: true
            })]
    },
    output: {
        path: path_1.default.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    logInfoToStdOut: true,
                    logLevel: "info",
                    transpileOnly: true,
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                },
                exclude: [/dist/, /node_modules/]
            },
            {
                test: /\.css$/,
                loader: '@teamsupercell/typings-for-css-modules-loader',
                options: {
                    modules: true
                }
            },
            {
                test: /\.scss$/,
                loader: '@teamsupercell/typings-for-css-modules-loader',
                options: {
                    modules: true
                }
            }
        ]
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: path_1.default.join(__dirname, "/public/index.html"),
            hash: true
        }),
        new webpack_1.default.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
    ]
});
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map
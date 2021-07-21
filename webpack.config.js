"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
const typescript_plugin_styled_components_1 = __importDefault(require("typescript-plugin-styled-components"));
const styledComponentsTransformer = typescript_plugin_styled_components_1.default();
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const webpackConfig = () => {
    return {
        "entry": {
            "code": "./src/index.tsx"
        },
        "resolve": {
            "extensions": [".ts", ".tsx", ".js", ".scss", ".css"],
            "fallback": { "http": false },
            "plugins": [
                new tsconfig_paths_webpack_plugin_1.TsconfigPathsPlugin({
                    "logLevel": "INFO",
                    "logInfoToStdOut": true
                })
            ]
        },
        "output": {
            "path": path_1.default.join(__dirname, "./dist"),
            "filename": "build.js",
            "clean": true
        },
        "module": {
            "rules": [
                {
                    "test": /\.tsx?$/,
                    "loader": "ts-loader",
                    "options": {
                        "transpileOnly": true,
                        "getCustomTransformers": () => {
                            return { "before": [styledComponentsTransformer] };
                        }
                    }
                }, { "test": /\.s[ac]ss$/i,
                    "use": [
                        "style-loader", { "loader": mini_css_extract_plugin_1.default.loader,
                            "options": { "esModule": false } }, "css-loader", "sass-loader"
                    ] }
            ]
        },
        "plugins": [
            new mini_css_extract_plugin_1.default({ "filename": "styles.css" }), new html_webpack_plugin_1.default({
                "template": path_1.default.join(__dirname, "/public/index.html")
            })
        ]
    };
};
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map
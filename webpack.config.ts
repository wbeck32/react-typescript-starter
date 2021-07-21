import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
const styledComponentsTransformer = createStyledComponentsTransformer();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const webpackConfig = () => {
	return {

		/*
		 * ...env.production || !env.development
		 * 	? {}
		 * 	: {"devtool": "eval-source-map"},
		 */
		"entry": {
			"code": "./src/index.tsx"
		},
		"resolve": {
			"extensions": [".ts", ".tsx", ".js", ".scss", ".css"],
			"fallback": {"http": false},
			"plugins": [
				new TsconfigPathsPlugin({
					"logLevel": "INFO",
					"logInfoToStdOut": true
				})
			]
		},
		"output": {
			"path": path.join(__dirname, "./dist"),
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
							return {"before": [styledComponentsTransformer]};
						}
					}
				}, {"test": /\.s[ac]ss$/i,
					"use": [
						"style-loader", {"loader": MiniCssExtractPlugin.loader,
							"options": {"esModule": false}}, "css-loader", "sass-loader"
					]}
			]
		},
		"plugins": [
			new MiniCssExtractPlugin({"filename": "styles.css"}), new HtmlWebpackPlugin({
				"template": path.join(__dirname, "/public/index.html")
			}), new webpack.DefinePlugin({
				// "process.env.PRODUCTION": env.production || !env.development
			})
		]
	};
};

export default webpackConfig;

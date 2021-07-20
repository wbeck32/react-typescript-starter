import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
const styledComponentsTransformer = createStyledComponentsTransformer();


const webpackConfig = () => {
	return {

		/*
		 * ...env.production || !env.development
		 * 	? {}
		 * 	: {"devtool": "eval-source-map"},
		 */
		"entry": {
			"code": "/src/index.tsx",
			"styles": "/src/App.css"
		},
		"resolve": {
			"extensions": [".ts", ".tsx", ".js", ".css"],
			"fallback": {"http": false},
			"plugins": [
				new TsconfigPathsPlugin({
					"logLevel": "INFO",
					"logInfoToStdOut": true
				})
			]
		},
		"output": {
			"path": path.join(__dirname, "/dist"),
			"filename": "[name].js",
			"clean": true
		},
		"module": {
			"rules": [
				{
					"test": /\.tsx?$/,
					"loader": "ts-loader",
					"options": {
						"logInfoToStdOut": true,
						"logLevel": "info",
						"transpileOnly": true,
						"getCustomTransformers": () => {
							return {"before": [styledComponentsTransformer]};
						}
					}
				}, {
					"test": /\.css$/i,
					"use": [
						"style-loader", "@teamsupercell/typings-for-css-modules-loader", {"loader": "css-loader",
							"options": {
								"modules": true
							}}
					]
				}
			]
		},
		"plugins": [
			new HtmlWebpackPlugin({
				"template": path.join(__dirname, "/public/index.html"),
				"hash": true
			}), new webpack.DefinePlugin({
				// "process.env.PRODUCTION": env.production || !env.development
			})
		]
	};
};

export default webpackConfig;

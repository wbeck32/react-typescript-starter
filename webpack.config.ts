import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const webpackConfig = (env): Configuration => ({
	entry: path.join(__dirname,"/src/index.tsx"),
	...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		fallback:{"http":false},
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "build.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					logInfoToStdOut:true,
					logLevel:"info",
					transpileOnly: true
				},
				exclude: [/dist/,/node_modules/]
			},
			{ 
				test: /\.css$/, 
				loader: 'typings-for-css-modules-loader?modules&namedExport&camelCase' 
			},
			{ 
				test: /\.scss$/, 
				loader: 'typings-for-css-modules-loader?modules&sass'
			}
		]
	},
	stats:{
		logging:"none",
		modules:false,
		context:"/src/",
		excludeModules:"/node_modules/",
		outputPath:true,
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname,"/public/index.html")
		}),
		new webpack.DefinePlugin({
			"process.env.PRODUCTION": env.production || !env.development,
			"process.env.NAME": JSON.stringify(require("./package.json").name),
			"process.env.VERSION": JSON.stringify(require("./package.json").version)
		}),
	]
});

export default webpackConfig;

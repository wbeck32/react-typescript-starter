import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();


const webpackConfig = ({
	entry: path.join(__dirname,"/src/index.tsx"),
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		fallback:{"http":false},
		plugins: [new TsconfigPathsPlugin({})]
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
					transpileOnly: true,
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] })

				},
				exclude: [/dist/,/node_modules/]
			},
			{ 
				test: /\.css$/, 
				loader: '@teamsupercell/typings-for-css-modules-loader',
				options:{
					modules:true
				}
			},
			{ 
				test: /\.scss$/, 
				loader: '@teamsupercell/typings-for-css-modules-loader',
				options:{
					modules:true
				}
			}
		]
	},
	devServer:{
		hot:true,
	},
	plugins: [
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

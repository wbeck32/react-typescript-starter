import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
declare const webpackConfig: (env: any) => {
    entry: string;
    resolve: {
        extensions: string[];
        fallback: {
            http: boolean;
        };
        plugins: TsconfigPathsPlugin[];
    };
    output: {
        path: string;
        filename: string;
    };
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            options: {
                logInfoToStdOut: boolean;
                logLevel: string;
                transpileOnly: boolean;
                getCustomTransformers: () => {
                    before: any[];
                };
                modules?: undefined;
            };
            exclude: RegExp[];
        } | {
            test: RegExp;
            loader: string;
            options: {
                modules: boolean;
                logInfoToStdOut?: undefined;
                logLevel?: undefined;
                transpileOnly?: undefined;
                getCustomTransformers?: undefined;
            };
            exclude?: undefined;
        })[];
    };
    plugins: (webpack.DefinePlugin | HtmlWebpackPlugin)[];
    devtool?: string;
};
export default webpackConfig;

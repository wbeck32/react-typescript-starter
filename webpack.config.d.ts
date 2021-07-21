import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
declare const webpackConfig: () => {
    entry: {
        code: string;
    };
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
        clean: boolean;
    };
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            options: {
                transpileOnly: boolean;
                getCustomTransformers: () => {
                    before: import("typescript").TransformerFactory<import("typescript").SourceFile>[];
                };
            };
            use?: undefined;
        } | {
            test: RegExp;
            use: (string | {
                loader: any;
                options: {
                    esModule: boolean;
                };
            })[];
            loader?: undefined;
            options?: undefined;
        })[];
    };
    plugins: any[];
};
export default webpackConfig;

const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    // mode: "development",
    devtool: "inline-source-map",
    entry: {
        'tinode': './src/index.ts',
        'tinode.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist/browser'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'tinode',
        umdNamedDefine: true
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};


/* module.exports = {
    entry: {
        'tinode': './src/index.ts',
        'tinode.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist/browser'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'tinode',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
        }]
    }
}; */
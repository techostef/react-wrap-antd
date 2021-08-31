const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        // chunkIds: 'named',
        // concatenateModules: false,
        // mangleExports: false,
        // realContentHash: false,
        // moduleIds: 'named',
        // sideEffects: false,
    },
    plugins: [
        // new webpack.ids.DeterministicModuleIdsPlugin({
        //     maxLength: 5,
        // }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/, // gitlab-ci https://stackoverflow.com/a/48904694
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.(css|scss)$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        }, {
            test: /\.(ts|tsx)?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },]
    },
    resolve: {
        extensions: ['d.ts', '.ts', '.tsx', '.js', '.css', '.scss'],
    },
    externals: {
        'react': 'commonjs react'
    }
};
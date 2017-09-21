const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'js/output.js'
    },
    module: {
        rules: [{
                test: /[\.]*\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /[\.]*\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                  use: ['css-loader', 'sass-loader'],
                  fallback: 'style-loader'
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'eval-source-map',
    plugins: [
        new ExtractTextWebpackPlugin({
                filename: 'css/styles.css',
                allChunks: true,
                disable: process.env.NODE_ENV !== 'production'
            }
        )
    ],
    node: {
        fs: 'empty'
    }
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeCSSAssets()
    );
}
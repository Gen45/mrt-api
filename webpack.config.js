const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    module: {
        rules: [{
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
                // ,
                // use: ExtractTextWebpackPlugin.extract({
                //   fallback: 'style-loader',
                //   use: ['css-loader', 'sass-loader']
                // })
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
    node: {
        fs: 'empty'
    }
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeCSSAssets(),
        new ExtractTextWebpackPlugin('styles.css')
    );
}
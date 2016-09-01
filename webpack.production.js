
'use strict';
const NODE_ENV = process.env.NODE_ENV || 'production';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname,'/client/index.js')
    ],
    output: {
        path: path.join(__dirname, '/build/'),
        publicPath: '/',  //dynamic load scripts
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.less', 'css'],
        modulesDirectories: ['node_modules', path.join(__dirname, './client')]
    },
    devtool: null,

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks:3

        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    "presets": ["react", "es2015"]
                }
            }
        ]
    },
};


// NODE_ENV=production webpack -p --config webpack.production.config.js
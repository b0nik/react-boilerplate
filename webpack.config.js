const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
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
    devtool: 'inline-source-map',

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    "presets": ["react", "es2015"]
                }
            },
            {
                test:/\.css$/,
                loader:'style!css!'

            },
            {
                test:/\.less$/,
                loader:ExtractTextPlugin.extract('style','css?sourceMap!' +
                    'less?sourceMap')

            },
            {
               test:/\.(png|jpg|svf|ttf|eot|woff|woff2)$/,
                exclude:/\/node_modules\//,
                loader:'file?name=[path][name].[ext]&limit=4096'
            },
            {
                test:/\.(png|jpg|svf|ttf|eot|woff|woff2)$/,
                include:/\/node_modules\//,
                loader:'url?name=[1].[name].[ext]&regExp=node_modules/(.*)&limit=4096'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};
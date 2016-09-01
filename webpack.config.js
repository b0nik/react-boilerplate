const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    devtool: 'eval',

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
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
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
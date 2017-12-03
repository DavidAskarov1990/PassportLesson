'use strict';
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    entry: './client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;
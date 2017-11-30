const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {

    }
}

module.exports = config;
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const THEME_ENV = require('./env.config.js');
const proxy_target = THEME_ENV.proxy_target;

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});

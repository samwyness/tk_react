const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true
};

module.exports = merge(common, config);

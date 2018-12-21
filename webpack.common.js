const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const THEME_ENV = require('./env.config.js');

module.exports = {
    entry: {
        bundle: path.resolve(THEME_ENV.paths.src, 'index.js'),
        style: path.resolve(THEME_ENV.paths.src, 'css/critical.css'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(THEME_ENV.paths.dist),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'minify']
                    }
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, 'dist'),
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: '[name].css',
        } )
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

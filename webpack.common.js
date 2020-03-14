const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Theme Environment
const THEME_ENV = require('./env.config.js');

// Path constants
const SRC = THEME_ENV.paths.src;
const ASSETS = THEME_ENV.paths.assets;
const CSS = THEME_ENV.paths.css;

// Common webpack config
const config = {
    entry: {
        bundle: path.resolve(SRC, 'index.js'),
        style: path.resolve(CSS, 'style.scss')
    },

    stats: true,

    output: {
        filename: 'tkr-[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                include: path.resolve(ASSETS, 'icons'),
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'icon-sprite.svg'
                }
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                styles: {
                    test: /\.css$/,
                    name: 'style',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'tkr-[name].css'
        }),

        new SpriteLoaderPlugin({
            plainSprite: true,
            spriteAttrs: {
                id: 'tkr-svg-sprite'
            }
        })
    ],

    resolve: {
        extensions: ['ts', 'tsx', '.js', '.jsx'],
        alias: {
            assets: ASSETS,
            css: CSS,
            store: path.resolve(SRC, 'store'),
            utils: path.resolve(SRC, 'utils'),
            components: path.resolve(SRC, 'components'),
            containers: path.resolve(SRC, 'containers')
        }
    }
};

module.exports = config;

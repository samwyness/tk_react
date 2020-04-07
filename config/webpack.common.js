const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Path variables
const paths = require('./paths.js');

// Common webpack config
const config = {
  entry: {
    bundle: paths.appIndexJs,
  },

  stats: true,

  output: {
    filename: 'tkr-[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        include: paths.appSrc,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        include: paths.appAssets,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'icon-sprite.svg',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          test: /\.css$/,
          name: 'style',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'tkr-[name].css',
    }),

    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        id: 'tkr-svg-sprite',
      },
    }),
  ],

  resolve: {
    extensions: ['ts', 'tsx', '.js', '.jsx'],
    alias: {
      assets: paths.appAssets,
      components: paths.appComponents,
      containers: paths.appContainers,
      store: paths.appStore,
      styles: paths.appStyles,
      utils: paths.appUtils,
    },
  },
};

module.exports = config;

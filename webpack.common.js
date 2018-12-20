const path = require('path');
const THEME_ENV = require('./env.config.js');

module.exports = {
    entry: {
        tkr: path.resolve(THEME_ENV.paths.src, 'index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: THEME_ENV.paths.base
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react', 'minify']
                    }
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ["style-loader", "css-loader"]
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
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

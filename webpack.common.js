const path = require('path');
const THEME_ENV = require('./env.config.js');

module.exports = {
    entry: {
        tkr: path.resolve(THEME_ENV.paths.src, 'index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: THEME_ENV.paths.build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
    					presets: ['env', 'react', 'minify'],
    				}
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

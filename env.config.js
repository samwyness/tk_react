const path = require('path');

module.exports = {
    theme_name: 'tk_react',
    proxy_target: 'http://tk-react.local', // Point to where your wordpress install is served i.e 'http://localhost:8080'
    paths: {
        base: path.resolve(__dirname),
        dist: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src')
    }
};

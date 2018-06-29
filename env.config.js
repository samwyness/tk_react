const path = require('path');

module.exports = {
    theme_name: 'tk_react',
    proxy_target: 'http://tk-react.local', // Point to where your wordpress install is served i.e 'http://localhost:8080'
    api: 'http://tk-react.local/wp-json/tkr/v1/',
    paths: {
        base: path.resolve(__dirname),
        src: path.resolve(__dirname, 'src')
    }
};

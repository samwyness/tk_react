const path = require('path');

module.exports = {
	paths: {
		root: path.resolve(__dirname),
		dist: path.resolve(__dirname, 'dist'),
		src: path.resolve(__dirname, 'src'),
		assets: path.resolve(__dirname, 'src/assets'),
		css: path.resolve(__dirname, 'src/css'),
		components: path.resolve(__dirname, 'src/assets'),
	}
};
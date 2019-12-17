module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
    'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		'__tkr__': 'readonly'
	},
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/react-in-jsx-scope': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-target-blank': ['error', {'enforceDynamicLinks': 'always'}],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    	'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies

	}
};

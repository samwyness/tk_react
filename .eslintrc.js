const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: 'react-app',

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __tkr__: 'readonly',
  },

  rules: {
    'brace-style': [ERROR, '1tbs'],
    'consistent-return': OFF,
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, { allowPattern: '^(error|warn)$' }],
    'eol-last': ERROR,
    eqeqeq: [ERROR, 'always', { null: 'ignore' }],
    indent: OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, { args: 'none' }],
    'no-use-before-define': OFF,
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'valid-typeof': [ERROR, { requireStringLiterals: true }],

    // Enforced by Prettier
    // TODO: Prettier doesn't handle long strings or long comments. Not a big
    // deal. But I turned it off because loading the plugin causes some obscure
    // syntax error and it didn't seem worth investigating.
    'max-len': OFF,
  },
};

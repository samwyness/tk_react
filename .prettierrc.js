'use strict';

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  jsxBracketSameLine: false,
  trailingComma: 'es5',
  printWidth: 80,

  overrides: [
    {
      files: '**/*.js',
      options: {
        trailingComma: 'all',
      },
    },
  ],
};

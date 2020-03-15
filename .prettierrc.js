'use strict';

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'babel',

  overrides: [
    {
      files: '**/*.js',
      options: {
        trailingComma: 'all',
      },
    },
  ],
};

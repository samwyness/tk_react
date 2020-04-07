# tk_react

A WordPress + React starter theme.

[![GitHub release](https://img.shields.io/github/v/release/samwyness/tk_react?color=blue&style=flat-square)](https://GitHub.com/samwyness/tk_react/releases/)
[![Only 32 Kb](https://badge-size.herokuapp.com/samwyness/tk_react/master/dist/tkr-bundle.js?label=bundle%20size&color=green&style=flat-square)](https://github.com/samwyness/tk_react/blob/master/dist/tkr-bundle.js)

## Getting Started

tk_react requires [Node.js](https://nodejs.org/) for development.

1. Install the theme by running the command `yarn install` or `npm install`in
   the theme directory.
2. Zip the theme folder and upload to your WordPress install.

## Development

### `yarn start` or `npm start`

Running one of the above commands in the project directory will start the theme
in development mode.

Any lint errors will be displayed in the console.

**Notes on development**

- This theme does not yet support using child themes, the theme is intended to
  be edited directly.
- tk_react is just a theme, how you choose to run your WordPress instance
  locally is entirely up to you.

## Production

### `yarn build` or `npm run build`

Running one of the above commands in the theme directory builds the theme ready
for production into the **'dist'** folder.<br />

It correctly bundles React in production mode and optimizes the build for the
best performance. The build is minified and your theme is ready to be deployed!

# tk_react

A WordPress + React starter theme.

[![GitHub release](https://img.shields.io/github/v/release/samwyness/tk_react?color=red&style=flat-square)](https://GitHub.com/samwyness/tk_react/releases/)
[![Only 32 Kb](https://badge-size.herokuapp.com/samwyness/tk_react/develop/dist/tkr-bundle.js?color=green&style=flat-square)](https://github.com/samwyness/tk_react/blob/develop/dist/tkr-bundle.js)

## Getting Started

tk_react requires [Node.js](https://nodejs.org/) for development.

1. Install the project by running the command `yarn install` in the project
   directory.
2. Zip the project folder and upload the theme to your local WordPress install.

## Development

Running the command `yarn start` in the project directory will start the app in
development mode. Creates a watch script that compiles .js and .css changes on
save.

Any lint errors will be displayed in the console.

**Notes on development.**

-   This theme does not yet support using child themes, the theme is intended to
    be edited directly.
-   tk_react is just a theme, how you choose to run your WordPress instance
    locally is entirely up to you.

## Production

Builds the app for production to the `dist` folder.

It correctly bundles React in production mode and optimizes the build for the
best performance. The build is minified and your app is ready to be deployed!

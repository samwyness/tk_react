// Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import 'whatwg-fetch';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app.js'

// Helpers
function trimUrlOrigin( url ) {
    if ( url === window.location.origin ) {
        url = '';
    } else {
        url = url.replace( window.location.origin, '' );
    }

    return url;
}

ReactDOM.render(
    <BrowserRouter basename={ trimUrlOrigin( __TK__.urls.base ) }>
        <App/>
    </BrowserRouter>,
    document.getElementById('App')
);

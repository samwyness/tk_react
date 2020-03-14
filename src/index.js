// Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

// utils
import { debug } from 'utils/debug';

// Store
import StoreProvider from 'store';

// App Parts
import App from './App';

if (process.env.NODE_ENV === 'development') {
    debug('Started in development mode', 'green');
}

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

console.log('%cApp started: entry point index.js', 'color: green;');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Core template files
import Header from './template_parts/Header';
import Content from './template_parts/Content';
import Footer from './template_parts/Footer';

// Our App Component, gets rendered to <div id="tkr-root"></div>
class App extends Component {
    render() {
        return (
            <div className="tkr-app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('tkr-root')
);

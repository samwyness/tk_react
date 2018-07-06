import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './template_parts/components/Header';
import PageRouter from './router.js'
import Footer from './template_parts/components/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="tk-site-wrap">
                <Header/>
                <PageRouter/>
                <Footer/>
            </div>
        );
    }
}

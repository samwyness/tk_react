import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import tk from './include/tk_scripts';
import PageRouter from './router.js'

export default class App extends Component {
    render() {
        return (
            <PageRouter/>
        );
    }
}

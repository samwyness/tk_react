import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TopNav from './components/TopNav';

export default class Header extends Component {
    render() {
        return (
            <header className="tkr-header">
                <TopNav/>
            </header>
        );
    }
}

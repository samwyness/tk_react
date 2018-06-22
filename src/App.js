import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Route } from 'react-router-dom'

import TopNav from './template_parts/components/TopNav';

// Page templates for routing
import Home from './template_parts/pages/Home';
import Posts from './template_parts/pages/Posts';

class App extends Component {
    render() {
        return (
            <div className="tkr-app">
                <TopNav/>

                <div className="tkr-page-content">
                    <Route path='/' exact component={Home} />
                    <Route path='/posts' component={Posts} />
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom'

import FrontPage from './content/FrontPage';
import Blog from './content/Blog';
import Single from './content/Single';

export default class Content extends Component {
    render() {
        return (
            <div className="tkr-page-content">
                <Switch>
                    <Route path='/' exact component={ FrontPage } />
                    <Route path='/blog' component={ Blog } />
                    <Route path='/posts' component={ Blog } />
                </Switch>
            </div>
        );
    }
}

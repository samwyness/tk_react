import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import FrontPage from './template_parts/FrontPage';
import Blog from './template_parts/Blog';
import Page from './template_parts/Page';
import Single from './template_parts/Single';
import Category from './template_parts/Category';
import Tag from './template_parts/Tag';
import Search from './template_parts/Search';

export default class PageRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ FrontPage }/>
                <Route path="/blog" component={ Blog }/>
                <Route path="/page/:pageNum" component={Page}/>
                <Route path="/search/:term" component={Search}/>
                <Route path="/category/:slug/page/:pageNum" component={Category}/>
                <Route path="/category/:slug/" component={Category}/>
                <Route path="/category/:parent/:slug/page/:pageNum" component={Category}/>
                <Route path="/category/:parent/:slug/" component={Category}/>
                <Route path="/tag/:slug/page/:pageNum" component={Tag}/>
                <Route path="/tag/:slug" component={Tag}/>
                <Route path="*" component={ Page }/>
            </Switch>
        );
    }
}

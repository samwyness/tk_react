import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import FrontPage from './template_parts/FrontPage';
import Blog from './template_parts/Blog';
import Page from './template_parts/Page';
import Single from './template_parts/Single';
import Category from './template_parts/Category';
import Tag from './template_parts/Tag';
import Search from './template_parts/Search';

class PageRouter extends Component {

    componentDidUpdate(prevProps) {
        // Handle the scroll restoration on change
        // TODO: handle hashes
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    // Helpers
    trimBaseUrl( url ) {
        return url.replace( window.location.origin, '' );
    }

    render() {
        return (
            <Switch>
                <Route path={ this.trimBaseUrl( __TK__.urls.base ) } component={ FrontPage }/>
                <Route path="/blog" component={ Blog }/>
                <Route path="/page/:pageNum" component={ Page }/>
                <Route path="/search/:term" component={ Search }/>
                <Route path="/category/:parent/:slug/page/:pageNum" component={ Category }/>
                <Route path="/category/:parent/:slug/" component={ Category }/>
                <Route path="/category/:slug/page/:pageNum" component={ Category }/>
                <Route path="/category/:slug/" component={ Category }/>
                <Route path="/tag/:slug" component={ Tag }/>
                <Route path="/tag/:slug/page/:pageNum" component={ Tag }/>
                <Route path=":year/:month/:day/:slug" component={ Single }/>
                <Route path="*" component={ Page }/> // = last case: catch all other routes
            </Switch>
        );
    }
}

export default withRouter(PageRouter);

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
    trimUrlOrigin( url ) {
        if (url === window.location.origin) {
            url = '/';
        } else {
            url = url.replace( window.location.origin, '' );
        }

        return url;
    }
    }

    render() {
        let home_path = this.trimUrlOrigin( __TK__.urls.base );
        let home_component = ( home_path ) ? FrontPage : Blog;

        return (
            <Switch>
                <Route exact path="/" component={ home_component }/>

                <Route path="/blog/" component={ Blog }/>

                <Route path="/page/:pageNum" component={ Page }/>
                <Route path="/search/:term" component={ Search }/>
                <Route path="/category/:parent/:slug/page/:pageNum" component={ Category }/>
                <Route path="/category/:parent/:slug/" component={ Category }/>
                <Route path="/category/:slug/page/:pageNum" component={ Category }/>
                <Route path="/category/:slug/" component={ Category }/>
                <Route path="/tag/:slug" component={ Tag }/>
                <Route path="/tag/:slug/page/:pageNum" component={ Tag }/>


                <Route path="*" component={ Page }/>
            </Switch>
        );
    }
}

export default withRouter(PageRouter);

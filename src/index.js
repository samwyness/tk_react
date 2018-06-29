console.log('%cApp started: entry point index.js', 'color: green;');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './template_parts/components/Header';
import Footer from './template_parts/components/Footer';

import FrontPage from './template_parts/FrontPage';
import Blog from './template_parts/Blog';
import Search from './template_parts/Search';
import Category from './template_parts/Category';
import Tag from './template_parts/Tag';
import Single from './template_parts/Single';

const App = () => (
    <div id="page" className="site">

        <Header/>
        <div className="site-content-contain">
            <Switch>
                <Route exact path="/" component={ FrontPage }/>
                <Route path="/blog" component={ Blog }/>
                {/* <Route path="/page/:pageNum" component={Blog}/>
                <Route path="/search/:term" component={Search}/>
                <Route path="/category/:slug/page/:pageNum" component={Category}/>
                <Route path="/category/:slug/" component={Category}/>
                <Route path="/category/:parent/:slug/page/:pageNum" component={Category}/>
                <Route path="/category/:parent/:slug/" component={Category}/>
                <Route path="/tag/:slug/page/:pageNum" component={Tag}/>
                <Route path="/tag/:slug" component={Tag}/> */}
                <Route path="*" component={ Single }/>
            </Switch>
        </div>
        <Footer/>

    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('tkr-root')
);

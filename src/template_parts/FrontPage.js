import React, { Component } from 'react';

import Splash from './components/Splash';
import PostsList from './components/PostsList';

export default class FrontPage extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            page_data: false
        }
    }

    componentDidMount() {
        // TODO: Move this fetch to index.js and handle page slug dynamically
        //       then we can pass page data down as props.
        fetch( __TK__.urls.wp_api + '/pages/' + __TK__.settings.home_page )
        .then( response => response.json() )
        .then( json => {
            this.setState( {
                page_data: json
            } );
        } )
        .catch( error => { console.log( error ) } );
    }

    createPageContentMarkup() {
        const content = (this.state.page_data) ? this.state.page_data.content.rendered : 'Loading...';
        return {__html: content};
    }

    render() {
        return (
            <div className="tk-content">

                <Splash
                    title="tk_react"
                    text="A WordPress + React starter theme."
                    link_to="/blog"
                    link_text="Check Out Your Blog"
                />

                <section className="container">

                    <h1 style={ {textTransform: 'uppercase'} }>Front Page <span className="tk-hot-title">Content</span></h1>
                    <span className="tk-title-underline"></span>

                    <div dangerouslySetInnerHTML={this.createPageContentMarkup()}></div>

                </section>

                <section className="container">

                    <h1 style={ {textTransform: 'uppercase'} }>Recent <span className="tk-hot-title">Posts</span></h1>
                    <span className="tk-title-underline"></span>

                    <PostsList/>

                </section>

            </div>
        );
    }
}

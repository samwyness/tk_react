import React, { Component } from 'react';

import tk from '../include/tk_scripts';

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
        tk.api.pages.fetchPageById( __TK__.settings.home_page )
        .then( response => {
            this.setState( {
                page_data: response
            } );
        } );
    }

    render() {
        let page_content = (this.state.page_data.content) ? this.state.page_data.content.rendered : false;

        return (
            <div className="tk-content">

                <Splash
                    title="tk_react"
                    text="A WordPress + React starter theme."
                    link_to="/blog"
                    link_text="Check Out Your Blog"
                />

                <section>
                    <div className="container">

                        <h1 style={ { textTransform: 'uppercase' } }>Front Page <span className="tk-hot-title">Content</span></h1>
                        <span className="tk-title-underline"></span>

                        <div dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( page_content ) }></div>

                    </div>
                </section>

                <section>
                    <div className="container">

                        <h1 style={ { textTransform: 'uppercase' } }>Recent <span className="tk-hot-title">Posts</span></h1>
                        <span className="tk-title-underline"></span>

                        <PostsList/>

                    </div>
                </section>

            </div>
        );
    }
}

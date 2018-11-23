import React, { Component } from 'react';

import tk from '../include/tk_scripts';

import Splash from './components/Splash';

export default class Single extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            post_data: false
        }
    }

    componentDidMount() {
        this.fetchPostData();
    }

    fetchPostData() {
        let post_slug = this.props.match.params.slug;

        tk.api.posts.fetchPostBySlug( post_slug ).then( response => {
            this.setState( {
                post_data: response[0]
            } );
        } );
    }

    render() {
        let post_data = this.state.post_data || false;
        let post_title = ( post_data.title ) ? post_data.title.rendered : 'Loading..';
        let post_content = ( post_data.content ) ? post_data.content.rendered : '...';

        return (
            <div className="tk-content">

                <Splash
                    title={post_title}
                />

                <section>
                    <div className="container">

                        <div dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( post_content ) }></div>

                    </div>
                </section>

            </div>
        );
    }
}

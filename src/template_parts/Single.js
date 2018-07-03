import React, { Component } from 'react';

import Splash from './components/Splash';

export default class Single extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            post_data: false
        }
    }

    componentDidMount() {
        // TODO: Move this fetch to index.js and handle post slug dynamically
        //       then we can pass page data down as props.
        let post_slug = this.props.location.pathname;

        fetch( __TK__.urls.wp_api + '/posts?slug=' + post_slug )
        .then( response => response.json() )
        .then( json => {
            this.setState( {
                post_data: json[0] || false
            } );
        } )
        .catch( error => { console.log( error ) } );
    }

    shouldComponentUpdate( nextProps, nextState ) {
        if (!nextState.post_data) {
            this.setState( {
                post_data: {
                    title: { rendered: 'Single Post Template' }
                }
            } );

            return false;
        }

        return true;
    }

    createPageContentMarkup() {
        let content = (this.state.post_data.content) ? this.state.post_data.content.rendered : '';
        return {__html: content};
    }

    render() {
        let post_data = this.state.post_data || false;
        let post_title = (post_data) ? post_data.title.rendered : false;

        return (
            <div className="tk-content">

                <Splash
                    title={post_title}
                />

                <div className="tk-container">

                    <div dangerouslySetInnerHTML={this.createPageContentMarkup()}></div>

                </div>

            </div>
        );
    }
}

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
        let post_slug = this.props.match.params.slug;

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
        let content = (this.state.post_data.content) ? this.state.post_data.content.rendered : '<p><i>No Posts found...</i></p>';
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

                <div className="container">

                    <div dangerouslySetInnerHTML={this.createPageContentMarkup()}></div>

                </div>

            </div>
        );
    }
}

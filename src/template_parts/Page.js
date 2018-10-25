import React, { Component } from 'react';

import Splash from './components/Splash';

export default class Page extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            page_data: false,
            loading: false
        }
    }

    componentDidMount() {
        return this.fetchPageData();
    }

    shouldComponentUpdate( nextProps, nextState ) {
        if (!nextState.page_data) {
            this.setState( {
                page_data: {
                    title: { rendered: 'Page Template' }
                }
            } );

            return false;
        }

        return true;
    }

    componentDidUpdate( prevProps, prevState ) {
        let prev_slug = prevProps.match.params.slug;
        let current_slug = this.props.match.params.slug;

        if (prev_slug !== current_slug) {
            return this.fetchPageData();
        }

        return false;
    }

    fetchPageData() {
        let page_slug = this.props.match.params.slug;

        this.setState( {
            loading: true
        } );

        fetch( __TK__.urls.wp_api + '/pages?slug=' + page_slug )
        .then( response => response.json() )
        .then( json => {
            this.setState( {
                page_data: json[0],
                loading: false
            } );
        } )
        .catch( error => { console.log( error ) } );
    }

    createPageContentMarkup() {
        let content = (this.state.page_data.content) ? this.state.page_data.content.rendered : '';
        return {__html: content};
    }

    render() {
        let page_data = this.state.page_data || false;
        let page_title = (page_data) ? page_data.title.rendered : false;
        let loading = (this.state.loading) ? 'Loading...' : false;

        if (loading) {
            page_title = loading;
        }

        console.log('%cRender: ', 'color: green');

        return (
            <div className="tk-content">

                <Splash
                    bg_class="tk-hot"
                    title={page_title}
                />

                <div className="container">

                    <div dangerouslySetInnerHTML={this.createPageContentMarkup()}></div>

                </div>

            </div>
        );
    }
}

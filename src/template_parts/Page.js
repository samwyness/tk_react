import React, { Component } from 'react';

import tk from '../include/tk_scripts';

import SectionHero from './components/SectionHero';

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

        tk.api.pages.fetchPageBySlug( page_slug )
        .then( response => {
            this.setState( {
                page_data: response[0],
                loading: false
            } );
        } );
    }

    render() {
        let page_data = this.state.page_data || false;
        let page_title = (page_data.title) ? page_data.title.rendered : false;
        let page_content = (page_data.content) ? page_data.content.rendered : false;
        let loading = (this.state.loading) ? 'Loading...' : false;

        if (loading) {
            page_title = loading;
        }

        return (
            <div className="tk-content">

                <SectionHero
                    bg_class="tk-dark"
                    title={ page_title }
                />

                <section>
                    <div className="container">

                        <div dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( page_content ) }></div>

                    </div>
                </section>

            </div>
        );
    }
}

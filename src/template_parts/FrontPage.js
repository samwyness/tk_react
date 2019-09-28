import React, { Component } from 'react';

import tk from '../include/tk_scripts';

import SectionHero from './components/SectionHero';
import SectionCustom from './components/SectionCustom';
import ContentPosts from './components/ContentPosts';

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
        let page_data = this.state.page_data || false;
        let page_content = ( page_data.content ) ? page_data.content.rendered : false;
        let feature_image_src = ( page_data.content ) ? page_data.featured_media_src : false;

        return (
            <div className="tk-content">

                <SectionHero
                    hero_class="tk-dark"
                    title="tk_react"
                    text="A WordPress + React starter theme."
                />

                <SectionCustom
                    title="Front Page Content"
                >
                    <div dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( page_content ) }></div>
                </SectionCustom>

                <SectionCustom
                    title="Recent Posts"
                >
                    <ContentPosts/>
                </SectionCustom>

            </div>
        );
    }
}

import React, { Component } from 'react';

import SectionHero from './components/SectionHero';
import SectionCustom from './components/SectionCustom';
import ContentPosts from './components/ContentPosts';

export default class Archive extends Component {
    render() {
        return (
            <div className="tkr-content">

                <SectionHero
                    hero_class="tkr-hot"
                    title="Archive Template"
                    link_to="/"
                    link_text="Back Home"
                />

                <SectionCustom
                    title="Recent Posts"
                >
                    <ContentPosts/>
                </SectionCustom>

            </div>
        );
    }
}

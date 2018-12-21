import React, { Component } from 'react';

import SectionHero from './components/SectionHero';
import SectionCustom from './components/SectionCustom';
import ContentPosts from './components/ContentPosts';

export default class Blog extends Component {
    render() {
        return (
            <div className="tk-content">

                <SectionHero
                    hero_class="tk-hot"
                    title="Blog Template"
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

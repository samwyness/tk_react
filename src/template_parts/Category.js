import React, { Component } from 'react';

import SectionHero from './components/SectionHero';
import SectionCustom from './components/SectionCustom';

export default class Category extends Component {
    render() {
        return (
            <div className="tk-content">

                <SectionHero
                    hero_class="tk-hot"
                    title="Category Template"
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

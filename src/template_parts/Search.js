import React, { Component } from 'react';

import SectionHero from './components/SectionHero';

export default class Image extends Component {
    render() {
        return (
            <div className="tk-content">

                <SectionHero
                    hero_class="tk-hot"
                    title="Search Template"
                    link_to="/"
                    link_text="Back Home"
                />

            </div>
        );
    }
}

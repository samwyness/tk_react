import React, { Component } from 'react';

import SectionHero from './components/SectionHero';
import SectionPosts from './components/SectionPosts';

export default class Archive extends Component {
    render() {
        return (
            <div className="tkr-content">

                <SectionHero
                    bg_class="tkr-hot"
                    title="Archive Template"
                    link_to="/"
                    link_text="Back Home"
                />

                <section>
                    <div className="container">

                        <h1 style={ { textTransform: 'uppercase' } }>Recent <span className="tk-hot-title">Posts</span></h1>
                        <span className="tk-title-underline"></span>

                        <SectionPosts/>

                    </div>
                </section>

            </div>
        );
    }
}

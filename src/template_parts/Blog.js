import React, { Component } from 'react';

import SectionHero from './components/SectionHero';
import SectionPosts from './components/SectionPosts';

export default class Blog extends Component {
    render() {
        return (
            <div className="tk-content">

                <SectionHero
                    bg_class="tk-hot"
                    title="Blog Template"
                    text="mmmm fast eh."
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

import React, { Component } from 'react';

import SectionHero from './components/SectionHero';
import SectionPosts from './components/SectionPosts';

export default class Category extends Component {
    render() {
        return (
            <div className="tk-content">

                <SectionHero
                    bg_class="tk-hot"
                    title="Category Template"
                    link_to="/"
                    link_text="Back Home"
                />

                <section>
                    <div className="container">

                        <h1 style={ {textTransform: 'uppercase'} }>Category</h1>
                        <span className="tk-title-underline"></span>

                        <SectionPosts/>
                        
                    </div>
                </section>

            </div>
        );
    }
}

import React, { Component } from 'react';

import Splash from './components/Splash';
import PostsList from './components/PostsList';

export default class Search extends Component {
    render() {
        return (
            <div className="tk-content">

                <Splash
                    bg_class="tk-hot"
                    title="Search Template"
                    link_to="/"
                    link_text="Back Home"
                />

                <section>
                    <div className="container">

                        <h1 style={ { textTransform: 'uppercase' } }>Search</h1>
                        <span className="tk-title-underline"></span>

                    </div>
                </section>

            </div>
        );
    }
}

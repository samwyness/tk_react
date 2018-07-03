import React, { Component } from 'react';

import Splash from './components/Splash';
import PostsList from './components/PostsList';

export default class Archive extends Component {
    render() {
        return (
            <div className="tkr-content">

                <Splash
                    bg_class="tkr-hot"
                    title="Archive Template"
                    link_to="/"
                    link_text="Back Home"
                />

                <section className="tk-container">

                    <h1 style={ {textTransform: 'uppercase'} }>Recent <span className="tk-hot-title">Posts</span></h1>
                    <span className="tk-title-underline"></span>

                    <PostsList/>

                </section>

            </div>
        );
    }
}

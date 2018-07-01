import React, { Component } from 'react';

import Splash from './components/Splash';
import PostsList from './components/PostsList';

export default class Blog extends Component {
    render() {
        return (
            <div className="tk-content">

                <Splash
                    bg_class="tk-hot"
                    title="Blog Template"
                    text="mmmm fast eh."
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

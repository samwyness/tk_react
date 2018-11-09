import React, { Component } from 'react';

import Splash from './components/Splash';
import PostsList from './components/PostsList';

export default class Blog extends Component {
    render() {
        return (
            <div className="tk-content">

                <Splash
                    bg_class="tk-hot"
                    title="Dashboard Template"
                />

                <section className="container">

                    <h1 style={ {textTransform: 'uppercase'} }>My Dashboard</h1>
                    <span className="tk-title-underline"></span>

                    <PostsList/>

                </section>

            </div>
        );
    }
}

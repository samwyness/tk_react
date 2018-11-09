import React, { Component } from 'react';

import Splash from './components/Splash';
import PostsList from './components/PostsList';

export default class Blog extends Component {
    render() {
        return (
            <div className="tk-content">

                <Splash
                    bg_class="tk-hot"
                    title="Login Template"
                />

                <section className="container">

                </section>

            </div>
        );
    }
}

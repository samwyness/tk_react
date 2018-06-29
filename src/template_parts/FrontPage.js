import React, { Component } from 'react';

import Splash from './components/Splash';
import MainContent from './components/MainContent';

export default class FrontPage extends Component {
    render() {
        return (
            <div className="site-content">

                <Splash
                    title="tk_react"
                    text="A WordPress + React starter theme."
                    link_to="/blog"
                    link_text="Check Out Your Blog"
                />

                <section className="site-main">
                    <div className="tkr-container">

                        <h1 style={ {textTransform: 'uppercase'} }>Hello <span className="tkr-hot-title">World</span></h1>
                        <span className="tkr-title-underline"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </section>

            </div>
        );
    }
}

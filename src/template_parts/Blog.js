import React, { Component } from 'react';

import Header from './components/Header';
import Splash from './components/Splash';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default class Blog extends Component {
    render() {
        return (
            <div className="site-content">

                <Splash
                    bg_class="tkr-hot"
                    title="Blog Template"
                    text="mmmm fast eh."
                    link_to="/"
                    link_text="Back Home"
                />
                <MainContent/>

            </div>
        );
    }
}

import React, { Component } from 'react';

import Splash from './components/Splash';
import MainContent from './components/MainContent';

export default class Blog extends Component {
    render() {
        return (
            <div className="tk-page-content">

                <Splash
                    bg_class="tk-hot"
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

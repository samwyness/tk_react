import React, { Component } from 'react';

import Splash from './components/Splash';
import MainContent from './components/MainContent';

export default class Tag extends Component {
    render() {
        return (
            <div className="tk-page-content">
                <Splash
                    bg_class="tk-hot"
                    title="Tag Template"
                    link_to="/"
                    link_text="Back Home"
                />
                <MainContent/>
            </div>
        );
    }
}

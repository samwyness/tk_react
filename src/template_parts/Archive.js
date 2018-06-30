import React, { Component } from 'react';

import Splash from './components/Splash';
import MainContent from './components/MainContent';

export default class Archive extends Component {
    render() {
        return (
            <div className="tkr-page-content">

                <Splash
                    bg_class="tkr-hot"
                    title="Archive Template"
                    link_to="/"
                    link_text="Back Home"
                />
                <MainContent/>

            </div>
        );
    }
}

import React, { Component } from 'react';

import Splash from './components/Splash';
import MainContent from './components/MainContent';

export default class Search extends Component {
    render() {
        return (
            <div className="tk-page-content">

                <Splash
                    bg_class="tk-hot"
                    title="Search Template"
                    link_to="/"
                    link_text="Back Home"
                />
                <MainContent/>

            </div>
        );
    }
}

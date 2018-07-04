import React, { Component } from 'react';

import Splash from './components/Splash';

export default class Page extends Component {
    render() {
        return (
            <div className="tk-content">

                <Splash
                    bg_class="tk-hot"
                    title="Page Template"
                    link_to="/"
                    link_text="Back Home"
                />

                <section className="container">

                    <h1 style={ {textTransform: 'uppercase'} }>{}</h1>
                    <span className="tk-title-underline"></span>

                </section>

            </div>
        );
    }

}

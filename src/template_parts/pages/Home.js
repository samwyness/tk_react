import React, { Component } from 'react';
import Splash from '../components/Splash';

class Home extends Component {
    render() {
        return (
            <Splash
                title="tk_react"
                text="A WordPress + React starter theme."
                link_to="/posts"
                link_text="Check out some posts"
            />
        );
    }
}

export default Home;

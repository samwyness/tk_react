import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Splash from './template_parts/pages/Splash';

class App extends Component {
    render() {
        return (
            <div className="tkr-page-content">
                <Splash title="tk_react" text="A WordPress + React starter theme." />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('tkr-app')
);

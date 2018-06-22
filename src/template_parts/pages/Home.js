import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
    componentDidMount() {
        console.log('I was triggered during componentDidMount');
    }

    render() {
        console.log('I was triggered during render');

        return (
            <div className="tkr-splash">
                <h1>{props.title}</h1>
            </div>
        );
    }
}

export default Home;

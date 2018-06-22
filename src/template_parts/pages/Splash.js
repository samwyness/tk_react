import React, { Component } from 'react';
import { render } from 'react-dom';



export default class Splash extends Component {
    componentDidMount() {
        console.log('I was triggered during componentDidMount');
    }

    render() {
        console.log('I was triggered during render');

        return (
            <div className="tkr-splash">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
};

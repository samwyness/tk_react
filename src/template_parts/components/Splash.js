import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Splash extends Component {
    render() {
        let button;
        if (this.props.link_to) {
            button = <NavLink className="tk-btn" to={this.props.link_to}>{this.props.link_text}</NavLink>;
        }

        return (
            <section className={'tk-splash ' + this.props.bg_class}>
                <h1>{this.props.title}</h1>
                <br></br>
                <p>{this.props.text}</p>
                { button }
            </section>
        );
    }
}

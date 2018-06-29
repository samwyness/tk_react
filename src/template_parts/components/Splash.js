import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Splash extends Component {
    render() {
        return (
            <section className={'tkr-splash ' + this.props.bg_class}>
                <h1>{this.props.title}</h1>
                <br></br>
                <p>{this.props.text}</p>
                <NavLink className="tkr-btn" to={this.props.link_to}>{this.props.link_text}</NavLink>
            </section>
        );
    }
}

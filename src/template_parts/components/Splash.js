import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            text: this.props.text,
            link_to: this.props.link_to,
            link_text: this.props.link_text
        }
    }

    render() {
        return (
            <div className={'tkr-splash ' + this.props.bg_class}>
                <h1>{this.state.title}</h1>
                <p>{this.state.text}</p>
                <NavLink className="tkr-btn" to={this.state.link_to}>{this.state.link_text}</NavLink>
            </div>
        );
    }
};

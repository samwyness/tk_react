import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class TopNav extends Component {
    render() {
        return (
            <div className="tkr-nav">
                <ul className="tkr-nav-right">
                    <li><NavLink className="tkr-btn" to="/">Home</NavLink></li>
                    <li><NavLink className="tkr-btn" to="/posts">Posts</NavLink></li>
                </ul>
            </div>
        );
    }
};

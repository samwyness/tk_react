import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        const self = this;

        fetch("http://tk-react.local/wp-json/tkr/v1/menus/top-nav-menu")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                self.setState({
                    isLoaded: true,
                    posts: json
                });
            });
    }

    render() {
        return (
            <div className="tkr-nav">
                <ul className="tkr-nav-right">
                    <li><NavLink className="tkr-btn" to="/">Home</NavLink></li>
                    <li><NavLink className="tkr-btn" to="/blog">Blog</NavLink></li>
                </ul>
            </div>
        );
    }
};

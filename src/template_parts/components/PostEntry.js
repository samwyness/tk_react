import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class PostEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.image,
            title: this.props.title,
            content: this.props.content,
            date: this.props.date
        }
    }

    createPostContentMarkup() {
        return {__html: this.state.content};
    }

    render() {
        return (
            <div className="tkr-post">
                <div className="tkr-post-title">
                    <h2>{this.state.title}</h2>
                </div>

                <div className="tkr-post-date">{new Date(this.state.date).toLocaleString()}</div>

                <div className="tkr-post-content" dangerouslySetInnerHTML={this.createPostContentMarkup()}></div>

                {/* <NavLink className="tkr-btn" to={this.props.link_text}>{this.props.link_text}</NavLink> */}
            </div>
        );
    }
};

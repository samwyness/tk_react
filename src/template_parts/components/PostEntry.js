import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class PostEntry extends Component {

    replaceExcerptBrackets( excerpt ) {
        return excerpt.replace( /\[&hellip;]/g, '...' );
    }

    createPostContentMarkup() {
        return {__html: this.replaceExcerptBrackets( this.props.excerpt.rendered )};
    }

    render() {
        return (
            <div className="tk-post">
                <div className="tk-post-title">
                    <h2>{this.props.title.rendered}</h2>
                </div>

                <div className="tk-post-date">{new Date(this.props.date).toLocaleString()}</div>

                <div className="tk-post-content" dangerouslySetInnerHTML={this.createPostContentMarkup()}></div>

                <NavLink className="tk-btn" to={this.props.link_to.replace( __TK__.urls.base, '' )}>
                    {this.props.link_text}
                </NavLink>
            </div>
        );
    }

};

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

import tk from '../../include/tk_scripts';

export default class Content extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        tk.api.posts.fetchPosts()
        .then( response => {
            this.setState( { posts: response }  );
        } )
        .catch( error => console.log( error ) );
    }

    render() {
        return (
            <div className={'tk-posts-list ' + this.props.container_class}>
                <div className="row">
                    {this.state.posts.map( ( post, index ) =>
                        <div key={index} className="tk-post col-xs-12 col-md-4">
                            <div className="tk-post-title">
                                <h2>{post.title.rendered}</h2>
                            </div>

                            <p className="tk-post-date">{ tk.tools.cleanDate( post.date ) }</p>

                            <div className="tk-post-content" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( post.excerpt.rendered ) }></div>

                            <NavLink className="tk-btn" to={ tk.tools.trimUrlBase( post.link ) }>
                                Read More
                            </NavLink>
                        </div>
                    ) }
                </div>
            </div>
        );
    }

}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'


export default class Content extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch( __TK__.urls.wp_api + '/posts' )
        .then( response => response.json() )
        .then( json => {
            this.setState( { posts: json }  );
        } )
        .catch( error => console.log( error ) );
    }

    replaceExcerptBrackets( excerpt ) {
        return excerpt.replace( /\[&hellip;]/g, '...' );
    }

    createPostContentMarkup( post_content ) {
        return {__html: this.replaceExcerptBrackets( post_content.rendered )};
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

                            <div className="tk-post-date">{new Date(post.date).toLocaleString()}</div>

                            <div className="tk-post-content" dangerouslySetInnerHTML={this.createPostContentMarkup( post.excerpt )}></div>

                            <NavLink className="tk-btn" to={post.link.replace( __TK__.urls.base, '' )}>
                                Read More
                            </NavLink>
                        </div>
                    ) }
                </div>
            </div>
        );
    }

}

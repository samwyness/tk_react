import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PostEntry from './PostEntry';

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

    render() {
        return (
            <div className={'tk-posts-list ' + this.props.container_class}>
                <div className="tk-row">
                    {this.state.posts.map( ( post ) =>
                        <PostEntry
                            key={post.id}
                            {...post}
                            link_to={post.link}
                            link_text="Read Post"
                        />
                    ) }
                </div>
            </div>
        );
    }

}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import tk from '../../include/tk_scripts';

export default class ContentPosts extends Component {
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
        let posts = this.state.posts || false;

        return (
            <div className="row">
                { posts && posts.map( ( post, index ) =>
                    <div key={ index } className="col-12 col-md-6 col-lg-4">
                        <div className="tk-post" ref={ this.post_card }>
                            <div className="tk-post-feature-img">
                                <img src={ post.featured_media_src || '' } className="object-cover" alt={ post.featured_media_src } />
                            </div>

                            <header className="tk-post-header">
                                <h3 className="tk-post-title" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( post.title.rendered ) }></h3>
                            </header>

                            <div className="tk-post-content" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( post.excerpt.rendered ) }></div>

                            <div className="tk-post-footer text-right">
                                <Link className="tk-btn tk-btn-link" to={ tk.tools.trimUrlBase( post.link ) }>
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        );
    }
}

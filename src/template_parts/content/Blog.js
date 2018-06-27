import React, { Component } from 'react';
import Splash from '../components/Splash';
import PostEntry from '../components/PostEntry';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {;
        fetch( "http://tk-react.local/wp-json/wp/v2/posts" )
        .then( response => response.json() )
        .then( json => {
            this.setState( { posts: json }  );
        } )
        .catch( error => console.log( error ) );
    }

    replaceExcerptBrackets(content) {
        return content.replace(/\[&hellip;]/g, '..');
    }

    render() {
        return (
            <div className="tkr-container-fluid nopad">
                <Splash
                    bg_class="tkr-hot"
                    title="Your Blog"
                    text="mmmm fast eh."
                    link_to="/"
                    link_text="Back Home"
                />

                <div className="tkr-container nopad">

                    <h1 style={{textTransform: 'uppercase'}}>Latest <span className="tkr-hot-title">Blog Posts</span></h1>
                    <span className="tkr-title-underline"></span>

                    <div className="tkr-row">
                        {this.state.posts.map((post) =>
                            <PostEntry
                                key={post.id}
                                image={post.featured_media}
                                date={post.date}
                                title={post.title.rendered}
                                content={post.content.rendered}
                                link_to={post.link}
                                link_text="Read Post"
                            />
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import Splash from '../components/Splash';
import Post from '../components/Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }
    componentDidMount() {
        const self = this;
        fetch("http://tk-react.local/wp-json/wp/v2/posts")
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
            <div className="tkr-container-fluid nopad">
                <Splash
                    key="0"
                    bg_class="tkr-hot"
                    title="tk_react"
                    text="A WordPress + React starter theme."
                    link_to="/"
                    link_text="Back Home"
                />,
                <div key="1" className="tkr-container nopad">
                    {this.state.posts.map((post) =>
                        <Post
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
        );
    }
}

export default Posts;

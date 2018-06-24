import React, { Component } from 'react';
import Splash from '../components/Splash';

export default class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            post_obj: []
        };
    }
    componentDidMount() {
        const self = this;
        fetch("http://tk-react.local/wp-json/wp/v2/posts/4")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                self.setState({
                    isLoaded: true,
                    post_obj: json
                });
            });
    }

    createPostContentMarkup() {
        return {__html: this.state.content};
    }

    render() {
        const post = this.state.post_obj;
        return (
            <div className="tkr-container-fluid nopad">
                {post.title}
            </div>
        );
    }
}

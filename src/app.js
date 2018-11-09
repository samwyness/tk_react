import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import tk from './include/tk_scripts';

import Header from './template_parts/components/Header';
import PageRouter from './router.js'
import Footer from './template_parts/components/Footer';

export default class App extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            activeUser: false
        }
    }

    componentDidMount() {
        if ( !this.state.loginCheck ) {
            this.fetchActiveUser();
        }
    }

    fetchActiveUser() {
        tk.api.users.fetchActiveUser().then( response => {
            if ( response.id && this.state.activeUser.id !== response.id ) {
                this.setState( {
                    activeUser: response
                } );
            } else {
                this.setState( {
                    activeUser: false
                } );
            }
        } );
    }

    render() {
        return (
            <div className="tk-site-wrap">
                <Header activeUser={ this.state.activeUser }/>
                <PageRouter/>
                <Footer/>
            </div>
        );
    }
}

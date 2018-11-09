import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Menu from './Menu';

export default class Header extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            classes: 'tk-top-nav'
        }
        this.top_nav = React.createRef();
        this.registerScrollHandler = this.registerScrollHandler.bind(this);
    }

    componentDidMount() {
        this.registerScrollHandler();
    }

    registerScrollHandler() {
        window.addEventListener( 'scroll', () => {
            let top_nav = this.top_nav.current;
            let top_nav_height = top_nav.getBoundingClientRect().height;

            if ( pageYOffset > top_nav_height ) {
                this.setState( { classes: 'tk-top-nav scrolled' } );
            } else {
                this.setState( { classes: 'tk-top-nav' } );
            }
        });
    }

    render() {
        let active_user = this.props.activeUser;
        let avatar_src = ( active_user ) ? active_user.avatar_urls[96] : '';

        return (
            <header className={ this.state.classes } ref={ this.top_nav }>
                <div className="container">

                    <div className="tk-nav-logo">
                        <Link to="/">
                            <img src={ __TK__.settings.site_logo } />
                        </Link>
                    </div>

                    <Menu location="top-nav-menu"/>

                    { ( !this.props.activeUser ) ? (
                        <Menu location="user-menu" className="align-right"/>
                    ) : (
                        <Link to="" className="tk-avatar align-right">
                            <img src={ avatar_src } />
                        </Link>
                    ) }

                </div>
            </header>
        );
    }

};

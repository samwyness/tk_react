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
        this.onScroll = this.onScroll.bind( this );
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.onScroll );
    }

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.onScroll );
    }

    onScroll() {
        let top_nav = this.top_nav.current;
        let top_nav_height = top_nav.getBoundingClientRect().height;

        if ( pageYOffset > top_nav_height ) {
            this.setState( { classes: 'tk-top-nav scrolled' } );
        } else {
            this.setState( { classes: 'tk-top-nav' } );
        }
    }

    render() {
        let logo_src = ( __TK__.settings.site_logo ) ? __TK__.settings.site_logo : false;

        return (
            <header className={ this.state.classes } ref={ this.top_nav }>
                <div className="container">

                    { ( logo_src ) &&
                        <div className="tk-nav-logo">
                            <Link to="/">
                                <img src={ logo_src } className="inverted" alt={ logo_src } />
                            </Link>
                        </div>
                    }

                    { ( !logo_src ) &&
                        <div className="tk-nav-site-title">
                            <Link to="/">
                                { __TK__.settings.meta.title }
                            </Link>
                        </div>
                    }

                    <Menu menu_location="top-nav-menu"/>

                </div>
            </header>
        );
    }

};

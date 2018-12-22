import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu';

export default class Header extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            classes: 'tk-top-nav',
            toggle: false
        }
        this.top_nav = React.createRef();
        this.slide_nav = React.createRef();
        this.onScroll = this.onScroll.bind( this );
        this.handleClick = this.handleClick.bind( this );
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.onScroll );
    }

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.onScroll );
    }

    componentWillReceiveProps( nextProps ) {
        if ( this.props.location !== nextProps.location ) {
            this.setState( {
                toggle: false
            } );
        }
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

    handleClick() {
        this.setState( {
            toggle: !this.state.toggle
        } );
    }

    render() {
        let logo_src = ( __TK__.settings.site_logo ) ? __TK__.settings.site_logo : false;
        let slide_nav_toggle = this.state.toggle || false;
        let slide_nav_classes = [ 'tk-slide-nav', ( this.state.toggle ? 'open' : '' ) ];
        let menu_button_text = ( this.state.toggle ) ? 'Close' : 'Menu';

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

                    <a className="tk-btn tk-menu-btn align-right" onClick={ this.handleClick }>{ menu_button_text }</a>

                </div>

                <div className={ slide_nav_classes.join( ' ' ) }>
                    <div className="container">

                        <Menu menu_location="top-nav-menu"/>

                    </div>
                </div>
            </header>
        );
    }

};

import React, { Component } from 'react';
import Menu from './Menu';

export default class Header extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            classes: 'site-header tkr-top-nav'
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
                this.setState( { classes: 'site-header tkr-top-nav scrolled' } );
            } else {
                this.setState( { classes: 'site-header tkr-top-nav' } );
            }
        });
    }

    render() {
        return (
            <header id="masthead" className={this.state.classes} ref={this.top_nav}>
                <div className="tkr-container">

                    <Menu name="Main Navigation"/>
                    
                </div>
            </header>
        );
    }

};

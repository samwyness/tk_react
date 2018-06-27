import React, { Component } from 'react';
import NavMenu from './components/NavMenu';

export default class Header extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            menu: []
        }
    }

    componentDidMount( props ) {
        let menu_items = this.state.menu.menu_items || [];

        if (menu_items.length < 1) {
            this.getNavMenu();
        }
    }

    // Helpers
    getNavMenu() {
        fetch( __TKR__.urls.tkr_api + '/menus/top-nav-menu' )
        .then( response => response.json() )
        .then( json => {
            this.setState( { menu: json }  );
        } )
        .catch( error => console.log( error ) );
    }

    render() {
        return (
            <header className="tkr-header">

                <div className="tkr-top-nav">
                    <NavMenu menu={this.state.menu}/>
                </div>

            </header>
        );
    }
}

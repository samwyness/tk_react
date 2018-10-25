import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            name: this.props.name || '',
            menu: []
        }
    }

    componentDidMount( props ) {
        this.getMenu();
    }

    // Helpers
    getMenu() {
        fetch( __TK__.urls.tkr_api + '/menus/locations/top-nav-menu' )
        .then( response => response.json() )
        .then( json => {
            this.setState( { menu: json }  );
        } )
        .catch( error => console.log( error ) );
    }

    trimUrlBase( url ) {
        if (url === __TK__.urls.base + '/') {
            url = '/';
        } else {
            url = url.replace( __TK__.urls.base, '' );
        }

        return url;
    }

    render() {
        return (
            <ul className="align-right">
                { this.state.menu.map( ( item, index ) => (
                    <li key={index}>
                        <NavLink className="tk-btn" exact to={ this.trimUrlBase( item.url ) }>{ item.title }</NavLink>
                    </li>
                ) ) }
            </ul>
        );
    }
};

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class NavMenu extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            menu: this.props.menu,
            menu_items: this.props.menu.menu_items || []
        }
    }

    stripBaseUrl( url_str ) {
        return url_str.replace( __TKR__.urls.base, '/' );
    }

    render() {
        let menu_items = this.props.menu.menu_items || [];

        return (
            <ul className="align-right">
                { menu_items.map( ( item, index ) => (
                    <li key={index}>
                        <NavLink className="tkr-btn" exact to={ this.stripBaseUrl( item.url ) }>{ item.title }</NavLink>
                    </li>
                ) ) }
            </ul>
        );
    }
};

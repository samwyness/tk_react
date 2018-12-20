import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import tk from '../../include/tk_scripts';

export default class Menu extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            menu: []
        }
    }

    componentDidMount( props ) {
        this.getMenu();
    }

    getMenu() {
        let menu_location = this.props.menu_location;

        if ( !menu_location ) return;

        tk.api.menus.fetchMenu( menu_location )
        .then( response => {
            this.setState( { menu: response }  );
        } )
        .catch( error => console.log( error ) );
    }

    render() {
        let menu_classes = [
            'tk-menu-' + this.props.menu_location,
            this.props.className
        ];

        return (
            <ul className={ menu_classes.join(' ') }>
                { this.state.menu.map( ( item, index ) => (
                    <li key={ index }>
                        <NavLink className="tk-btn" exact to={ tk.tools.trimUrlBase( item.url ) }>{ item.title }</NavLink>
                    </li>
                ) ) }
            </ul>
        );
    }
};

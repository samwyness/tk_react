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
        let location = this.props.location;
        
        tk.api.menus.fetchMenu( location )
        .then( response => {
            this.setState( { menu: response }  );
        } )
        .catch( error => console.log( error ) );
    }

    render() {
        return (
            <ul className="align-right">
                { this.state.menu.map( ( item, index ) => (
                    <li key={ index }>
                        <NavLink className="tk-btn" exact to={ tk.tools.trimUrlBase( item.url ) }>{ item.title }</NavLink>
                    </li>
                ) ) }
            </ul>
        );
    }
};

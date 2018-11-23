import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import tk from '../../include/tk_scripts';

export default class Splash extends Component {
    render() {
        let feature_img_src = (this.props.feature_img_src) ? this.props.feature_img_src : '';
        let styles = {}

        if ( feature_img_src ) {
            styles.backgroundImage = `url( ${feature_img_src} )`
        }

        return (
            <section className={ 'tk-splash ' + this.props.bg_class } style={ styles }>
                <div className="container">
                    <h1 dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( this.props.title ) }></h1>
                    <br></br>
                    <p>{ this.props.text }</p>
                    { ( this.props.link_to ) &&
                        <NavLink className="tk-btn tk-btn-lg" to={this.props.link_to}>{this.props.link_text}</NavLink>
                    }
                </div>
            </section>
        );
    }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Splash extends Component {
    render() {
        return (
            <section className={ 'tk-splash ' + this.props.bg_class }>
                <div className="container">
                    <h1>{ this.props.title }</h1>
                    <br></br>
                    <p>{ this.props.text }</p>
                    { ( this.props.link_to ) &&
                        <NavLink className="tk-btn" to={this.props.link_to}>{this.props.link_text}</NavLink>
                    }
                </div>
            </section>
        );
    }
}

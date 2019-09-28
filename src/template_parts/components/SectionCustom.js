import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import tk from '../../include/tk_scripts';

export default class ContentPosts extends Component {
    render() {
        let icon = this.props.icon || false;
        let title = this.props.title || false;
        let info = this.props.info || false;
        let container_class = ( this.props.fluid ) ? 'container-fluid' : 'container';

        return (
            <section className="tk-section-posts">
                <div className={ container_class }>
                    <div className="row">

                        { ( title || info ) &&
                            <header className="tk-section-header col-12">
                                <h2 className="tk-section-title" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( title ) }></h2>
                                { ( info ) &&
                                    <h3 className="tk-section-info align-center" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( info ) }></h3>
                                }
                            </header>
                        }

                        <div className="tk-section-content col-12">
                            { this.props.children }
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

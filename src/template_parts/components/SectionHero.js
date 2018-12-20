import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import tk from '../../include/tk_scripts';

export default class SectionHero extends Component {
    render() {
        let title = ( typeof this.props.title === 'string' ) ? this.props.title : 'Add a Title';
        let text = ( this.props.text ) ? this.props.text : false;

        let link_to = ( this.props.link_to ) ? this.props.link_to : false;
        let link_text = ( this.props.link_text ) ? this.props.link_text : 'Button';

        let feature_img_src = ( this.props.feature_img_src ) ? this.props.feature_img_src : false;

        let bg_class = ( this.props.bg_class ) ? this.props.bg_class : '';

        return (
            <section className={ 'tk-section-hero ' + bg_class }>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-xl-9">
                            <header className="tk-section-header">
                                <h1 className="tk-section-title" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( title ) }></h1>

                                { ( text ) &&
                                    <h3 className="tk-section-info" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( text ) }></h3>
                                }

                                { ( link_to ) &&
                                    <Link className="tk-btn tk-btn-lg" to={ link_to }>{ link_text }</Link>
                                }
                            </header>
                        </div>

                        { ( feature_img_src ) &&
                            <div key={ 'hero_feature_img' } className="tk-feature-img">
                                <img src={ feature_img_src } className="object-cover align-left" />
                                <div className="shine"></div>
                            </div>
                        }

                    </div>
                </div>
            </section>
        );
    }
}

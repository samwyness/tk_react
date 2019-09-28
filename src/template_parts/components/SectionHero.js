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

        let hero_class = ( this.props.hero_class ) ? this.props.hero_class : '';

        if ( feature_img_src ) {
            hero_class += ' tk-has-feature-img'
        }

        return (
            <section className={ 'tk-section-hero ' + hero_class }>
                <div className="container">
                    <div className="row">

                        <header className="tk-section-header col-12 col-xl-9">
                            <h1 className="tk-section-title" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( title ) }></h1>

                            { ( text ) &&
                                <h3 className="tk-section-info" dangerouslySetInnerHTML={ tk.tools.createHTMLMarkup( text ) }></h3>
                            }

                            { ( link_to ) &&
                                <Link className="tk-btn tk-btn-lg" to={ link_to }>{ link_text }</Link>
                            }
                        </header>

                        { ( feature_img_src ) &&
                            <div key={ 'hero_feature_img' } className="tk-feature-img col-12">
                                <img src={ feature_img_src } className="object-cover align-left" alt={ feature_img_src } />
                                <div className="shine"></div>
                            </div>
                        }

                    </div>
                </div>
            </section>
        );
    }
}

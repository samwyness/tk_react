import React from 'react';
import { Link } from 'react-router-dom'

let logo_src = ( __TK__.settings.site_logo ) ? __TK__.settings.site_logo : false;
let meta_title = ( __TK__.settings.meta.title ) ? __TK__.settings.meta.title : false;

const Footer = () => (
    <footer className="tk-footer">
        <div className="container">
            <div className="row">

                <div className="col-12 col-lg-3">
                    { ( logo_src ) &&
                        <div className="tk-nav-logo">
                            <Link to="/">
                                <img src={ logo_src } className="" />
                            </Link>
                        </div>
                    }

                    { ( !logo_src ) &&
                        <div className="tk-nav-site-title">
                            <Link to="/">
                                { meta_title }
                            </Link>
                        </div>
                    }
                    <span>© Your Awesome Company Pty Ltd</span>
                </div>

                <div className="col-12 col-lg-3">
                    <p><strong>Contact</strong></p>
                    <ul>
                        <li><a href="mailto:sales@onetouch.com.fj">sales@email.com</a></li>
                        <li><a href="tel:+6797997187">+61 1234 5678</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
);

export default Footer;

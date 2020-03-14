import React from 'react';
import { A } from 'hookrouter';

// Components
import Icon from 'components/Icon';

// Theme variables
const site_logo = __tkr__.settings.site_logo;
const site_title = __tkr__.settings.meta.title;
const site_description = __tkr__.settings.meta.description;
const footer_menu_1 = __tkr__.settings.menus.footer_menu_1;
const footer_menu_2 = __tkr__.settings.menus.footer_menu_2;
const footer_menu_3 = __tkr__.settings.menus.footer_menu_3;
const social_menu = __tkr__.settings.menus.social_menu;

const Footer = () => {
    return (
        <footer className="tkr-footer">
            <div className="tkr-footer-top py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <A href="/" className="tkr-site-branding">
                                {site_logo && (
                                    <span className="tkr-site-logo">
                                        <img src={site_logo} />
                                    </span>
                                )}

                                {!site_logo && site_title && (
                                    <div className="tkr-site-title">
                                        <strong>{site_title}</strong>
                                    </div>
                                )}

                                {site_description && (
                                    <div className="tkr-site-description">
                                        {site_description}
                                    </div>
                                )}
                            </A>

                            <ul className="tkr-social-links mt-3 list-style-none list-horizontal">
                                {social_menu &&
                                    social_menu.items.map((item, index) => (
                                        <li key={index}>
                                            <Icon icon={item.title} />
                                            <A
                                                href={`${item.url.protocol}://${item.url.host}`}
                                            ></A>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <div className="tkr-footer-links foot col-md-8">
                            <div className="row">
                                {footer_menu_1 && (
                                    <div
                                        className={`col-md-4 footer-menu-1 menu-${footer_menu_1.slug}`}
                                    >
                                        <div className="tkr-footer-menu-title">
                                            <h4 className="mt-0">
                                                {footer_menu_1.name}
                                            </h4>
                                        </div>

                                        <ul className="px-0 list-style-none">
                                            {footer_menu_1.items.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="mb-2"
                                                    >
                                                        <A href={item.url.path}>
                                                            {item.title}
                                                        </A>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {footer_menu_2 && (
                                    <div
                                        className={`col-md-4 footer-menu-2 menu-${footer_menu_2.slug}`}
                                    >
                                        <div className="tkr-footer-menu-title">
                                            <h4 className="mt-0">
                                                {footer_menu_2.name}
                                            </h4>
                                        </div>

                                        <ul className="px-0 list-style-none">
                                            {footer_menu_2.items.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="mb-2"
                                                    >
                                                        <A href={item.url.path}>
                                                            {item.title}
                                                        </A>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {footer_menu_3 && (
                                    <div
                                        className={`col-md-4 footer-menu-3 menu-${footer_menu_3.slug}`}
                                    >
                                        <div className="tkr-footer-menu-title">
                                            <h4 className="mt-0">
                                                {footer_menu_3.name}
                                            </h4>
                                        </div>

                                        <ul className="px-0 list-style-none">
                                            {footer_menu_3.items.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="mb-2"
                                                    >
                                                        <A href={item.url.path}>
                                                            {item.title}
                                                        </A>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tkr-footer-bottom">
                <div className="container justify-content-center">
                    <span>© {new Date().getFullYear()} Sam Wyness</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

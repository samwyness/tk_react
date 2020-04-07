import React from 'react';
import { A } from 'hookrouter';

// Components
import Icon from 'components/Icon';

// Theme settings
import { themeSettings } from 'utils/theme';

const Footer = () => {
  return (
    <footer className="tkr-footer">
      <div className="tkr-footer-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <A href="/" className="tkr-site-branding">
                {themeSettings.logo && (
                  <span className="tkr-site-logo">
                    <img
                      src={themeSettings.logo}
                      alt={themeSettings.meta.title}
                    />
                  </span>
                )}

                {themeSettings.meta.title && (
                  <span className="tkr-site-title">
                    <strong>{themeSettings.meta.title}</strong>
                  </span>
                )}

                {themeSettings.meta.description && (
                  <div className="tkr-site-description">
                    {themeSettings.meta.description}
                  </div>
                )}
              </A>

              <ul className="tkr-social-links mt-3 list-style-none list-horizontal">
                {themeSettings.menus.social_menu &&
                  themeSettings.menus.social_menu.items.map((item, index) => (
                    <li key={index}>
                      <Icon icon={item.title} />
                      <A href={`${item.url.protocol}://${item.url.host}`}></A>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="tkr-footer-links foot col-md-8">
              <div className="row">
                {themeSettings.menus.footer_menu_1 && (
                  <div
                    className={`col-md-4 footer-menu-1 menu-${themeSettings.menus.footer_menu_1.slug}`}
                  >
                    <div className="tkr-footer-menu-title">
                      <h4 className="mt-0">
                        {themeSettings.menus.footer_menu_1.name}
                      </h4>
                    </div>

                    <ul className="px-0 list-style-none">
                      {themeSettings.menus.footer_menu_1.items.map(
                        (item, index) => (
                          <li key={index} className="mb-2">
                            <A href={item.url.path}>{item.title}</A>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

                {themeSettings.menus.footer_menu_2 && (
                  <div
                    className={`col-md-4 footer-menu-2 menu-${themeSettings.menus.footer_menu_2.slug}`}
                  >
                    <div className="tkr-footer-menu-title">
                      <h4 className="mt-0">
                        {themeSettings.menus.footer_menu_2.name}
                      </h4>
                    </div>

                    <ul className="px-0 list-style-none">
                      {themeSettings.menus.footer_menu_2.items.map(
                        (item, index) => (
                          <li key={index} className="mb-2">
                            <A href={item.url.path}>{item.title}</A>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

                {themeSettings.menus.footer_menu_3 && (
                  <div
                    className={`col-md-4 footer-menu-3 menu-${themeSettings.menus.footer_menu_3.slug}`}
                  >
                    <div className="tkr-footer-menu-title">
                      <h4 className="mt-0">
                        {themeSettings.menus.footer_menu_3.name}
                      </h4>
                    </div>

                    <ul className="px-0 list-style-none">
                      {themeSettings.menus.footer_menu_3.items.map(
                        (item, index) => (
                          <li key={index} className="mb-2">
                            <A href={item.url.path}>{item.title}</A>
                          </li>
                        ),
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

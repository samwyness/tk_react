import React from 'react';
import { A } from 'hookrouter';

// Components
import ButtonLink from 'components/ButtonLink';

// Theme settings
import { themeSettings } from 'utils/theme';

const Header = () => {
  return (
    <header id="top-nav" className="tkr-header d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <A href="/" className="tkr-site-branding">
          {themeSettings.logo && (
            <span className="tkr-site-logo">
              <img src={themeSettings.logo} alt={themeSettings.meta.title} />
            </span>
          )}

          {themeSettings.meta.title && (
            <span className="tkr-site-title">
              <strong>{themeSettings.meta.title}</strong>
            </span>
          )}
        </A>

        <nav className="tkr-main-menu align-right">
          <ul className="list-style-none">
            {themeSettings.menus.main_menu &&
              themeSettings.menus.main_menu.items
                .filter(item => item.status === 'publish')
                .map((item, index) => (
                  <li key={index}>
                    <ButtonLink href={item.url.path}>{item.title}</ButtonLink>
                  </li>
                ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

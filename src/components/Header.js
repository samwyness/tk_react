import React from 'react';
import { A } from 'hookrouter';

import { themeSettings } from 'utils/theme';
import NavMenu from './NavMenu';

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

        <NavMenu
          menu_name="primary"
          container="nav"
          container_class="align-right"
          menu_class="list-style-none"
        />
      </div>
    </header>
  );
};

export default Header;

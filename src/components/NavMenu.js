import React from 'react';

import { themeSettings } from 'utils/theme';
import { classNames } from 'utils/classNames';
import ButtonLink from 'components/ButtonLink';

/**
 * Returns markup for a WordPress navigation menu.
 *
 * This component aims to replicate the behaviour when rendering a navigation
 * menu using the WordPress function 'wp_nav_menu'
 * https://developer.wordpress.org/reference/functions/wp_nav_menu/
 *
 * @since 1.0.0
 * @author Sam Wyness <samwyness22@gmail.com>
 *
 * @prop {Number|String} menu_name - Desired menu. Accepts a menu ID, slug, name, or object.
 * @prop {Object} args - See https://developer.wordpress.org/reference/functions/wp_nav_menu/#parameters
 *
 */
const NavMenu = ({
  menu_name,
  container = 'div',
  container_id = '',
  container_class = '',
  menu_id = '',
  menu_class = '',
  before = null,
  after = null,
  link_before = null,
  link_after = null,
  theme_location = '',
}) => {
  const menu = themeSettings.menus[menu_name];
  const Container = container;

  const containerClasses = classNames({
    'tkr-nav-menu': true,
    [`menu-${menu.slug}-container`]: true,
    [container_class]: container_class,
  });

  const menuClasses = classNames({
    menu: true,
    [menu_class]: menu_class,
  });

  return (
    <Container id={container_id} className={containerClasses}>
      <ul id={menu_id} className={menuClasses}>
        {menu &&
          menu.items
            .filter(item => item.status === 'publish')
            .map((item, index) => (
              <li
                key={index}
                className={classNames({
                  'menu-item': true,
                  [`menu-item-${item.id}`]: true,
                })}
              >
                {before}
                <ButtonLink href={item.url.path}>
                  {link_before}
                  {item.title}
                  {link_after}
                </ButtonLink>
                {after}
              </li>
            ))}
      </ul>
    </Container>
  );
};

export default NavMenu;

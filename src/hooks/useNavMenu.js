import { themeSettings } from 'utils/theme';

/**
 * Returns data for a WordPress navigation menu.
 *
 * This hook first checks for menus stored in the themeSettings global.
 * If a menu is not found in themeSettings the hook will attempt to fetch the
 * menu data from the TKR API service.
 *
 * @param {Number|String} menu - Desired menu. Accepts a menu ID, slug, name, or object.
 * @return {Object|null} - Navigation menu markup. False if there are no items or no menu was found.
 *
 * @since 1.0.0
 * @author Sam Wyness <samwyness22@gmail.com>
 */
export const useNavMenu = menu => {
  return themeSettings.menus[menu] || null;
};

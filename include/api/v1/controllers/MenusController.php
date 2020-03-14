<?php

/**
 * TKR REST API Custom Pages routes
 *
 * Description: Extends TKR API with WordPress page routes.
 *
 */

if (!class_exists('TKR_REST_Menus_Controller')) :
    /**
     * TKR REST Pages class.
     *
     * @package API
     * @since 1.0.0
     */
    class TKR_REST_Menus_Controller extends TKR_REST_Controller
    {

        /**
         * Constructor.
         */
        public function __construct()
        {
            $this->rest_base = 'menus';
            parent::__construct();
        }

        public function register_routes()
        {
            register_rest_route($this->namespace, '/' . $this->rest_base, array(
                array(
                    'methods'                => WP_REST_Server::READABLE,
                    'callback'            => array($this, 'get_items'),
                    'permission_callback' => array($this, 'get_item_permissions_check'),
                )
            ));
            register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', array(
                array(
                    'methods'                => WP_REST_Server::READABLE,
                    'callback'            => array($this, 'get_item'),
                    'permission_callback' => array($this, 'get_item_permissions_check'),
                )
            ));
            register_rest_route($this->namespace, '/' . $this->rest_base . '/locations/(?P<location>[a-zA-Z0-9_-]+)', array(
                array(
                    'methods'                => WP_REST_Server::READABLE,
                    'callback'            => array($this, 'get_item_by_location'),
                    'permission_callback' => array($this, 'get_item_permissions_check'),
                )
            ));
        }


        /**
         * Get all menus and output rest response
         *
         * @param WP_REST_Request $request Current request.
         * @return array All published menus
         */
        public function get_items($request)
        {
            $menus = wp_get_nav_menus($args);

            $collection = array();

            if (empty($menus)) {
                return rest_ensure_response($collection);
            }

            foreach ($menus as $menu) {
                $response = $this->prepare_item_for_response($menu, $request);
                $collection[] = $this->prepare_response_for_collection($response);
            }

            return rest_ensure_response($collection);
        }


        /**
         * Get Menu
         *
         * @since  1.0.0
         * @return array The published menu
         */
        public function get_item($request)
        {
            $id = (int) $request['id'];
            $menu_obj = wp_get_nav_menu_object($id);

            if (empty($menu_obj)) {
                return rest_ensure_response(null);
            }

            $response = $this->prepare_item_for_response($menu_obj);

            return $response;
        }

        /**
         * Get Menu
         *
         * @since  1.0.0
         * @return array The published menu
         */
        public function get_item_by_location($request)
        {
            $location = $request['location'];
            $theme_locations = get_nav_menu_locations();

            if (!isset($theme_locations[$location])) {
                return rest_ensure_response(null);
            }

            $menu_obj = wp_get_nav_menu_object($theme_locations[$location]);

            if (!isset($menu_obj->term_id)) {
                return rest_ensure_response(null);
            }

            $response = $this->prepare_item_for_response($menu_obj, $request);

            return $response;
        }

        /**
         * Prepare menu response.
         *
         * @param WP_Post $menu_obj The menu object whose response is being prepared.
         */
        public function prepare_item_for_response($menu_obj, $request)
        {
            $menu = $menu_obj;
            $theme_locations = get_nav_menu_locations();
            $menu_locations = array();

            foreach ($theme_locations as $location => $menu_id) {
                if ($menu_id === $menu->term_id) {
                    $menu_locations[] = $location;
                }
            }

            $nav_items = wp_get_nav_menu_items($menu->term_id);
            $menu_items = array();

            foreach ($nav_items as $nav_item => $item_data) {
                // Break the url into parts
                $url = parse_url($item_data->url);
                $url_base = $url['scheme'] . '://' . $url['host'];

                // If the menu url is the same as the wordpress home url set
                // url part path to '/' so we can use it in react
                if (!$url['path'] && $url_base === get_option('home')) {
                    $url['path'] = '/';
                }

                $menu_items[$nav_item]['id']         = $item_data->object_id;
                $menu_items[$nav_item]['url']         = $url;
                $menu_items[$nav_item]['title']        = $item_data->title;
                $menu_items[$nav_item]['classes']     = implode(' ', $item_data->classes);
                $menu_items[$nav_item]['status']     = get_post_status($item_data->object_id);
            }

            $menu_data = array();
            $menu_data['id']         = $menu->term_id;
            $menu_data['name']         = $menu->name;
            $menu_data['parent']     = $menu->parent;
            $menu_data['slug']         = $menu->slug;
            $menu_data['items']        = $menu_items;
            $menu_data['locations'] = $menu_locations;

            return rest_ensure_response($menu_data);
        }
    }
endif;

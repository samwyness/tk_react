<?php

if (!class_exists('TKR_REST_Menus_Controller')) :
  /**
   * Menus Controller
   *
   * Controller class for registering and handling WordPress menu routes.
   *
   * @since 1.0.0
   * @package TKR_REST_API
   * @author Sam Wyness <samwyness22@gmail.com>
   *
   */
  class TKR_REST_Menus_Controller extends TKR_REST_Controller
  {
    public function __construct()
    {
      $this->rest_base = 'menus';
      parent::__construct();
    }

    public function register_routes()
    {
      register_rest_route($this->namespace, '/' . $this->rest_base, array(
        array(
          'methods'             => WP_REST_Server::READABLE,
          'callback'            => array($this, 'get_items'),
          'permission_callback' => array($this, 'get_item_permissions_check'),
        )
      ));
      register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<name>[a-zA-Z0-9_-]+)', array(
        array(
          'methods'             => WP_REST_Server::READABLE,
          'callback'            => array($this, 'get_item'),
          'permission_callback' => array($this, 'get_item_permissions_check'),
        )
      ));
      register_rest_route($this->namespace, '/' . $this->rest_base . '/location/(?P<location>[a-zA-Z0-9_-]+)', array(
        array(
          'methods'             => WP_REST_Server::READABLE,
          'callback'            => array($this, 'get_location_item'),
          'permission_callback' => array($this, 'get_item_permissions_check'),
        )
      ));
    }


    /**
     * Get all menus items
     *
     * @param WP_REST_Request $request - Current request object
     * @return Array A collection of created WordPress menus
     */
    public function get_items($request)
    {
      $menus = wp_get_nav_menus();
      $collection = array();

      if (empty($menus)) {
        return new WP_Error(
          'rest_menu_invalid_name',
          'Invalid menu name.',
          array('status' => 404)
        );
      }

      foreach ($menus as $menu) {
        $response = $this->prepare_item_for_response($menu, $request);
        $collection[] = $this->prepare_response_for_collection($response);
      }

      return $collection;
    }


    /**
     * Get a single menu item
     *
     * @since 1.0.0
     * @author Sam Wyness <sa
     *
     * @return array The published menu
     */
    public function get_item($request)
    {
      $menu_name = $request['name'];
      $menu_obj = wp_get_nav_menu_object($menu_name);

      if (empty($menu_obj)) {
        return new WP_Error(
          'rest_menu_invalid_name',
          'Invalid menu name.',
          array('status' => 404)
        );
      }

      return $this->prepare_item_for_response($menu_obj, $request);;
    }


    /**
     * Get a single menu item by its location
     *
     * @since 1.0.0
     * @author Sam Wyness <samwyness22@gmail.com>
     *
     * @param WP_REST_Request $request - Current request object.
     * @return array The published menu
     */
    public function get_location_item($request)
    {
      $location = $request['location'];
      $theme_locations = get_nav_menu_locations();

      if (!isset($theme_locations[$location])) {
        return new WP_Error(
          'rest_menu_invalid_location',
          'Invalid location.',
          array('status' => 404)
        );
      }

      $menu_obj = get_term($theme_locations[$location], 'nav_menu');

      if (!isset($menu_obj->term_id)) {
        return new WP_Error(
          'rest_menu_invalid_term_id',
          'Invalid term id.',
          array('status' => 404)
        );
      }

      return $this->prepare_item_for_response($menu_obj, $request);
    }

    /**
     * Prepare menu item response
     *
     * @since 1.0.0
     * @author Sam Wyness <samwyness22@gmail.com>
     *
     * @param WP_Post $menu_obj - The menu object whose response is being prepared.
     * @return WP_REST_Response
     */
    public function prepare_item_for_response($menu_obj, $request)
    {
      $menu = $menu_obj;
      $nav_items = wp_get_nav_menu_items($menu->term_id);
      $menu_items = array();

      foreach ($nav_items as $nav_item => $item_data) {
        // Break the url into parts
        $url = parse_url($item_data->url);

        $menu_items[$nav_item]['id'] = $item_data->object_id;
        $menu_items[$nav_item]['url'] = $url;
        $menu_items[$nav_item]['title'] = $item_data->title;
        $menu_items[$nav_item]['classes'] = implode(' ', $item_data->classes);
        $menu_items[$nav_item]['status'] = get_post_status($item_data->object_id);
      }

      $menu_data = array();
      $menu_data['id'] = $menu->term_id;
      $menu_data['name'] = $menu->name;
      $menu_data['parent'] = $menu->parent;
      $menu_data['slug'] = $menu->slug;
      $menu_data['items'] = $menu_items;

      return rest_ensure_response($menu_data);
    }
  }
endif;

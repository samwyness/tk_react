<?php

class TKR_REST_Menus_Controller extends TKR_REST_API {

    public function __construct() {
        $this->namespace = '/tkr/v1';
		$this->rest_base = '/menus';
    }

    public function register_routes() {
        register_rest_route( $this->namespace, $this->rest_base, array(
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => array( $this, 'get_items' ),
                // 'permission_callback' => [$this, 'index_permissions_check'],
                'args' => [],
            )
        ) );

        $get_item_args = $this->get_context_param();

        register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<location>[a-zA-Z0-9-]+)', array(
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => array( $this, 'get_item' ),
                // 'permission_callback' => [$this, 'index_permissions_check'],
                'args' => $get_item_args
            )
        ) );
    }

    public function get_items( $request ) {
        $wp_menus = wp_get_nav_menus();
        $repsonse = [];

        foreach ($wp_menus as $key => $menu) {
            $menu = wp_get_nav_menu_object( $menu->term_id );
            $repsonse[$key] = $this->prepare_item_for_response( $menu, $request );
        }

        return $repsonse;
    }

    public function get_item ( $request ) {
        $wp_menu_locations = get_nav_menu_locations();
        $menu_location = $request['location'];

        $menu_id = false;
        $menu = false;

        if ( $wp_menu_locations[$menu_location] ) {
            $menu_id = $wp_menu_locations[$menu_location];
            $menu = wp_get_nav_menu_object( $menu_id );
        }

        $response = $this->prepare_item_for_response( $menu, $request );
        return $response;
    }

    public function prepare_item_for_response( $item, $request ) {
        $item->menu_items = wp_get_nav_menu_items( $item->term_id );
        return rest_ensure_response( $item );
    }

    // public function index_permissions_check( WP_REST_Request $request ) {
    //     // Really basic example for permissions checking
    //     // (https://codex.wordpress.org/Roles_and_Capabilities#read)
    //     return $this->user_permission_check( get_current_user_id(), 'read' );
    // }

    // public function user_permission_check( $user_id = '', $cap = 'admin' ) {
    //     if ( !empty( $user_id ) ) {
    //         return user_can( $user_id, $cap );
    //     }
    //     return false;
    // }
}

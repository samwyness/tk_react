<?php
/**
 *
 * tk_react theme functions and definitions
 *
 */

/**
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 */
function tk_react_setup() {
	// wp_localize_script( 'wp-api', 'wpApiSettings', array(
	//     'root' => esc_url_raw( rest_url() ),
	//     'nonce' => wp_create_nonce( 'wp_rest' )
	// ) );

	// Include our custom api controller
	require get_parent_theme_file_path( '/include/api/v1/api.php' );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'top-nav-menu'    => __( 'Top Nav Menu', 'tk_react' ),
		'slide-nav-menu'    => __( 'Slide Nav Menu', 'tk_react' )
	) );
}
add_action( 'after_setup_theme', 'tk_react_setup' );


/**
 * Enqueue scripts and styles.
 */
function tk_react_scripts() {
	// Theme css files.
	wp_enqueue_style( 'tk_react-styles', get_stylesheet_uri(), '1.0', true );

	// Theme js files.
	wp_enqueue_script( 'tk_react-scripts', get_theme_file_uri( '/build/tkr.bundle.js' ), array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'tk_react_scripts' );


/*
 * Add custom user id column
 */
function add_user_id_column( $columns ) {
	$columns['user_id'] = 'ID';
	return $columns;
}
add_filter('manage_users_columns', 'add_user_id_column');

/*
 * Add id to custom column column
 */
function add_user_id_column_content($value, $column_name, $user_id) {
	if ( 'user_id' == $column_name )
		return $user_id;
	return $value;
}
add_action('manage_users_custom_column',  'add_user_id_column_content', 10, 3);

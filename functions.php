<?php
/*
 *
 * tk_react theme functions and definitions
 *
 */


/*
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 */
function tk_react_setup() {
	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'top-nav-menu'    => __( 'Top Nav Menu', 'tk_react' ),
		'slide-nav-menu'    => __( 'Slide Nav Menu', 'tk_react' )
	) );

}
add_action( 'after_setup_theme', 'tk_react_setup' );


/*
 *
 * Enqueue scripts and styles.
 *
 */
add_action( 'wp_enqueue_scripts', function() {
	// Theme css files.
	wp_enqueue_style( 'tk_react-styles', get_stylesheet_uri(), '1.0', true );

	// Theme js files.
	wp_enqueue_script( 'tk_react-scripts', get_theme_file_uri( '/tkr.bundle.js' ), array(), '1.0', true );
} );


/*
 *
 * Add inline scripts to header
 *
 */
add_action( 'wp_head', function() {
	$url = trailingslashit( home_url() );
	$path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );

	// Create the script
	$var = '__TKR__';
	$data = json_encode(array(
		'title' => get_bloginfo( 'name', 'display' ),
		'path' => $path,
		'urls' => array(
			'base' => esc_url_raw( $url ),
			'wp_api' => esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
			'tkr_api' => esc_url_raw( get_rest_url( null, '/tkr/v1' ) )
		),
		'woo' => array(
			'api' => esc_url_raw( get_rest_url( null, '/wc/v2' ) ),
			'consumer_key' => 'ck_803bcdcaa73d3a406a0f107041b07ef6217e05b9',
			'consumer_secret' => 'cs_c50ba3a77cc88c3bf46ebac49bbc96de3a543f03'
		),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
		'post_id' => is_singular() ? get_the_ID() : 0,
		'type'    => ! empty( $post_type_object->rest_base ) ? $post_type_object->rest_base : $post_type_object->name,
	));

  	echo "<script> window.{$var} = {$data}; </script>\n";

}, 10 );


/*
 *
 * Add custom post excerpt length
 *
 */
add_filter( 'excerpt_length', function( $length ) {
	return 24;
}, 999 );

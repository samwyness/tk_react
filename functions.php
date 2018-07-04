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

	require_once get_template_directory() . '/include/api/v1/api.php';
}
add_action( 'after_setup_theme', 'tk_react_setup' );


/*
 *
 * Enqueue scripts and styles.
 *
 */
add_action( 'wp_enqueue_scripts', function() {
	// Theme css files.
	// wp_enqueue_style( 'tk_react-styles', get_stylesheet_uri(), '1.0', true );
	wp_enqueue_style( 'tk_react-styles', get_theme_file_uri( '/src/css/critical.css' ), '1.0', true );
	// wp_enqueue_style( 'tk_react-styles', get_theme_file_uri( '/src/css/critical.css' ), '1.0', true );

	// Theme js files.
	wp_enqueue_script( 'tk_react-scripts', get_theme_file_uri( '/tkr.bundle.js' ), array(), '1.0', true );
} );


/*
 *
 * Add inline scripts to header
 *
 */
add_action( 'wp_head', function() {

	// Create the script
	$var = '__TK__';
	$data = json_encode(array(
		'urls' => array(
			'base' => get_option( 'home' ),
			'wp_api' => esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
			'tkr_api' => esc_url_raw( get_rest_url( null, '/tkr/v1' ) )
		),
		'settings' => array(
			'blogname' => get_option( 'blogname' ),
			'blogdescription' => get_option( 'blogdescription' ),
			'default_category' => get_option( 'default_category' ),
			'home' => get_option( 'home' ),
			'siteurl' => get_option( 'siteurl' ),
			'template' => get_option( 'template' )
		),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
		'woo' => array(
			'api' => esc_url_raw( get_rest_url( null, '/wc/v2' ) ),
			'consumer_key' => 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
			'consumer_secret' => 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
		)
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


/*
 *
 * Add post feature image to wp rest
 *
 */
add_action('rest_api_init', 'register_rest_images' );
function register_rest_images() {
    register_rest_field( array('post'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

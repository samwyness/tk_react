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
add_action( 'after_setup_theme', 'tk_theme_setup' );
function tk_theme_setup() {
	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// Enable support for title-tag options
	add_theme_support( 'title-tag' );

	// Enable support for custom logo
	$defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    );
    add_theme_support( 'custom-logo', $defaults );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'top-nav-menu'    => __( 'Top Nav Menu', 'tk_react' ),
		'user-menu'    => __( 'User Menu', 'tk_react' ),
		'slide-nav-menu'    => __( 'Slide Nav Menu', 'tk_react' )
	) );
}


/*
 *
 * Enqueue scripts and styles.
 *
 */
add_action( 'wp_enqueue_scripts', 'tk_enqueue_scripts' );
function tk_enqueue_scripts() {
	// Theme css files.
	wp_enqueue_style( 'tk_react-styles', get_theme_file_uri( '/dist/style.css' ), '1.0', true );
	wp_enqueue_style( 'bootstrap-grid', get_theme_file_uri( '/assets/bootstrap/bootstrap-grid.min.css' ));

	// Theme js files.
	wp_enqueue_script( 'tk_react-scripts', get_theme_file_uri( 'dist/bundle.js' ), array(), '1.0', true );
}


/*
 *
 * Add inline script to header
 *
 */
add_action( 'wp_head', 'tk_header_script', 10 );
function tk_header_script() {
	// Front Page Settings
	$page_on_front = get_option( 'page_on_front' );
	$page_for_posts = get_option( 'page_for_posts' );

	if ( $page_on_front === '0' ) {
		$page_on_front = false;
		$page_for_posts = false;
	}

	$home_page_url = ( $page_on_front ) ? get_post_field( 'post_name', $page_on_front ) : '/';
	$blog_page_url = ( $page_for_posts ) ? get_post_field( 'post_name', $page_for_posts ) : '/';

	// Custom Logo
	$logo_id = get_theme_mod( 'custom_logo' );
	$logo_url = false;
	if ( get_theme_mod( 'custom_logo' ) ) {
		$logo_url = wp_get_attachment_image_src( $logo_id , 'full' )[0];
	}

	// Create the script
	$var = '__TK__';
	$data = json_encode( array(
		'urls' => array(
			'base' => 				get_option( 'home' ),
			'wp_api' => 			esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
			'tkr_api' => 			esc_url_raw( get_rest_url( null, '/tkr/v1' ) )
		),
		'settings' => array(
			'home_page' => 			$page_on_front,
			'home_page_slug' => 	$home_page_url,
			'blog_page' => 			$page_for_posts,
			'blog_page_slug' => 	$blog_page_url,

			'site_logo' => 			$logo_url,
			'permalinks' => 		get_option( 'permalink_structure' ),
			'default_category' => 	get_option( 'default_category' ),
			'template' => 			get_option( 'template' ),
			'nonce' => 				wp_create_nonce( 'wp_rest' ),
			'is_logged_in' => 		is_user_logged_in(),

			'meta' => array(
				'title' => 			get_option( 'blogname' ),
				'description' => 	get_option( 'blogdescription' )
			),
		)
	) );

	// Add to the wp header
  	echo "<script> window.{$var} = {$data}; </script>\n";
}


/**
 *
 * Add Google Fonts
 *
 */
add_action('wp_enqueue_scripts', 'tk_add_google_fonts', 0 );
function tk_add_google_fonts() {
	// wp_register_style( 'tk-google-fonts-roboto', 'https://fonts.googleapis.com/css?family=Roboto:400,700' );
	// wp_enqueue_style( 'tk-google-fonts-roboto' );
}


/*
 *
 * Remove wp emoji scripts and styles
 *
 */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');


/*
 *
 * Add custom post excerpt length
 *
 */
add_filter( 'excerpt_length', function( $length ) {
	return 14;
}, 999 );


/*
 *
 * Enable SVG support
 *
 */
add_filter( 'upload_mimes', 'cc_mime_types' );
function cc_mime_types( $mimes ) {
  	$mimes['svg'] = 'image/svg+xml';
  	return $mimes;
}

/*
 *
 * Theme includes
 *
 */
require_once get_template_directory() . '/include/api/v1/api.php';

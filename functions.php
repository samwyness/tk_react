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
	wp_enqueue_style( 'tk_react-styles', get_theme_file_uri( '/src/css/critical.css' ), '1.0', true );
	wp_enqueue_style( 'bootstrap-grid', get_theme_file_uri( '/assets/bootstrap/bootstrap-grid.min.css' ));

	// Theme js files.
	wp_enqueue_script( 'tk_react-scripts', get_theme_file_uri( '/tkr.bundle.js' ), array(), '1.0', true );
} );


/*
 *
 * Add inline scripts to header
 *
 */
add_action( 'wp_head', function() {
	// Front Page Settings
	$page_on_front = false;
	$page_for_posts = false;

	if ( $page_on_front !== 0 ) {
		$page_on_front = get_option( 'page_on_front' );
		$page_for_posts = get_option( 'page_for_posts' );
	}

	// Custom Logo
	$logo_id = get_theme_mod( 'custom_logo' );
	$logo_url = false;
	if ( get_theme_mod( 'custom_logo' ) ) {
		$logo_url = wp_get_attachment_image_src( $logo_id , 'full' )[0];
	}

	// Create the script
	$var = '__TK__';
	$data = json_encode(array(
		'urls' => array(
			'base' => get_option( 'home' ),
			'wp_api' => esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
			'tkr_api' => esc_url_raw( get_rest_url( null, '/tkr/v1' ) )
		),
		'settings' => array(
			'home_page' => $page_on_front,
			'blog_page' => $page_for_posts,
			'default_category' => get_option( 'default_category' ),
			'site_url' => get_option( 'siteurl' ),
			'site_logo' => $logo_url,
			'template' => get_option( 'template' ),
			'permalinks' => get_option( 'permalink_structure' ),
			'meta' => array(
				'title' => get_option( 'blogname' ),
				'description' => get_option( 'blogdescription' )
			)
		),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
		'woo' => array(
			'api' => esc_url_raw( get_rest_url( null, '/wc/v2' ) ),
			'consumer_key' => 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
			'consumer_secret' => 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
		)
	));

	// Add to the wp header
  	echo "<script> window.{$var} = {$data}; </script>\n";

}, 10 );


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

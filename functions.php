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

}
add_action( 'after_setup_theme', 'tk_react_setup' );


/**
 * Enqueue scripts and styles.
 */
function tk_react_scripts() {
	// Theme css files.
	wp_enqueue_style( 'tk_react-styles', get_stylesheet_uri(), '1.0', true );

	// Theme js files.
	wp_enqueue_script( 'tk_react-scripts', get_theme_file_uri( '/dist/tkr.bundle.js' ), array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'tk_react_scripts' );

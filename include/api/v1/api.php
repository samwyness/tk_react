<?php

/**
 * TKR REST API
 * Description: A custom WordPress API for wp-react-resume.
 *
 * Version:     1.0.0
 *
 * Author:      Sam Wyness
 * Author URI:  https://github.com/samwyness
 *
 */
class TKR_REST_API extends WP_REST_Controller
{
  const VERSION = '1.0.0';

  public static function includes()
  {
    require_once "controllers/Controller.php";
    require_once "controllers/MenusController.php";
    require_once "controllers/FormsController.php";
    require_once "controllers/PostsController.php";

    // Yoast extension
    if (defined('WPSEO_FILE')) {
      require_once "class-yoast-frontend.php";
    }
  }

  public function init()
  {
    self::includes();
    self::create_rest_routes();
  }

  public function create_rest_routes()
  {
    // Menus
    $controller = new TKR_REST_Menus_Controller;
    $controller->register_routes();

    // Forms
    $controller = new TKR_REST_Forms_Controller;
    $controller->register_routes();

    // Posts
    $controller = new TKR_REST_Posts_Controller;
    $controller->register_routes();
  }
}

add_action('rest_api_init', function () {
  $tkr_api = new TKR_REST_API();
  $tkr_api->init();
});

// NOTE: These functions may need to be moved to a new controller
/*
 *
 * Add feature image to wp rest
 *
 */
add_action('rest_api_init', 'register_rest_feature_image');
function register_rest_feature_image()
{
  register_rest_field(
    array('post', 'page'),
    'featured_media_src',
    array(
      'get_callback'    => 'get_rest_featured_image',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

function get_rest_featured_image($object, $field_name, $request)
{
  if ($object['featured_media']) {
    $img = wp_get_attachment_image_src($object['featured_media'], 'app-thumb');
    return $img[0];
  }

  return false;
}

/*
 *
 * Add support for showing blocks as parsed json in the rest api.
 *
 * This will add support for all post types including custom post types.
 *
 */
function add_blocks_support_to_api()
{
  if (!function_exists('use_block_editor_for_post_type')) {
    require ABSPATH . 'wp-admin/includes/post.php';
  }

  // Surface all Gutenberg blocks in the WordPress REST API
  $post_types = get_post_types_by_support(['editor']);

  foreach ($post_types as $post_type) {
    if (use_block_editor_for_post_type($post_type)) {
      register_rest_field(
        $post_type,
        'blocks',
        array(
          'get_callback' => function (array $post) {
            return parse_blocks($post['content']['raw']);
          },
        )
      );
    }
  }
}
add_action('rest_api_init', 'add_blocks_support_to_api');

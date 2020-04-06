<?php

/**
 * Custom Post Types
 */
class TKR_Custom_Post_Type
{

  function __construct()
  {
    $this->post_types = array();
    // Register the post type
    echo print_r('BOOM');
    die;
    add_action('init', array($this, 'register'));
  }

  public function register()
  {
    foreach ($this->post_types as $post_type => $settings) {
      register_post_type($post_type, $settings);
    }
  }

  public function create_post_type($config)
  {
    $post_type          = $config['post_type'];
    $singular_label     = $config['singular_label'];
    $plural_label       = $config['plural_label'];
    $settings           = $config['settings'];

    $default_labels = array(
      'name'                  => __($plural_label),
      'singular_name'         => __($singular_label),
      'add_new'               => __('Add New ' . $singular_label),
      'add_new_item'          => __('Add New ' . $singular_label),
      'edit'                  => __('Edit ' . $singular_label),
      'edit_item'             => __('Edit ' . $singular_label),
      'new_item'              => __('New ' . $singular_label),
      'view'                  => __('View ' . $singular_label),
      'view_item'             => __('View ' . $singular_label),
      'search_items'          => __('Search ' . $plural_label),
      'not_found'             => __('No ' . $plural_label . ' Found'),
      'not_found_in_trash'    => __('No ' . $plural_label . ' found in the trash'),
      'parent'                => __('Parent ' . $singular_label . ' view')
    );

    $default_supports = array(
      'editor',
      'title',
      'thumbnail',
      'author',
    );

    $default_taxonomies = array();

    $default_settings = array(
      'labels'                => $default_labels,
      'public'                => true,
      'publicly_queryable'    => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'exclude_from_search'   => true,
      'query_var'             => true,
      'rewrite'               => array('slug' => $post_type),
      'capability_type'       => 'post',
      'has_archive'           => true,
      'hierarchical'          => false,
      'show_in_rest'          => true,
      'supports'              => $default_supports,
      'taxonomies'            => $default_taxonomies,
    );

    // Add the post type
    $this->post_types[$post_type] = array_merge($default_settings, $settings);
  }
}

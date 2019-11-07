<?php
/**
 * TKR REST API Custom Posts routes
 *
 * Extends TKR API with WordPress post routes.
 */

if ( ! class_exists( 'TKR_REST_Posts_Controller' ) ) :
	/**
	 * TKR REST Multi class.
	 *
	 * @package TKR_API
	 * @since 1.0.0
	 */
	class TKR_REST_Posts_Controller extends TKR_REST_Controller {

		/**
	     * Constructor.
	     */
		public function __construct() {
			$this->rest_base = 'posts';
			parent::__construct();
	    }

		public function register_routes() {
			register_rest_route( $this->namespace, '/' . $this->rest_base, array(
				array(
					'methods'  			  => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
				)
            ) );
            
			register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<slug>[\w\-]+)', array(
				array(
					'methods'  			  => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
				)
			) );
			
			register_rest_route( $this->namespace, '/' . $this->rest_base . '/id/(?P<id>[\d]+)', array(
				array(
					'methods'  			  => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item_by_id' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
				)
			) );
		}


		/**
		 * Get all posts
		 *
		 * @param WP_REST_Request $request - Current request
		 * @return array All published posts
		 */
		public function get_items( $request ) {
			$url_params = $request->get_params();

			$page 			= isset( $url_params['page'] ) ? $url_params['page'] : 1;
			$posts_per_page = isset( $url_params['per_page'] ) ? $url_params['per_page'] : 3;
			$orderby 		= isset( $url_params['order_by'] ) ? $url_params['order_by'] : 'date';
			$order 			= isset( $url_params['order'] ) ? $url_params['order'] : 'DESC';

			$args = array(
				'paged' 		 => $page,
				'posts_per_page' => $posts_per_page,
				'orderby' 		 => $orderby,
				'order' 		 => $order,
			);

			$query = new WP_Query( $args );
			$posts = $query->posts;

			$collection = array();

		    if ( empty( $posts ) ) {
		        return rest_ensure_response( $collection );
		    }

			foreach ( $posts as $post ) {
		    	$response = $this->prepare_item_for_response( $post, $request );
		    	$collection[] = $this->prepare_response_for_collection( $response );
			}

		    return rest_ensure_response( $collection );
		}

		/**
		 * Get a single post by it's slug
		 *
		 * @since  1.0.0
		 * @return array The published post
		 */
		public function get_item( $request ) {
			$slug = $request['slug'];
			
			$args = array(
				'post_type' => 'any',
				'name' => $slug,
			);
			
			$post_query = new WP_Query();
			$result = $post_query->query( $args );

		    if ( empty( $result ) ) {
		        return new WP_Error( 'rest_post_invalid_slug', 'Invalid post slug.', array('status' => 404) );
		    }

		    $response = $this->prepare_item_for_response( $result[0], $request );

		    return $response;
		}
		
		/**
		 * Get a single post by it's ID
		 *
		 * @since  1.0.0
		 * @return array The published post
		 */
		public function get_item_by_id( $request ) {
			$ID = $request['id'];
			
			$args = array(
				'post_type' => 'any',
				'p' => $ID,
			);
			
			$post_query = new WP_Query();
			$result = $post_query->query( $args );

		    if ( empty( $result ) ) {
				return new WP_Error( 'rest_post_invalid_id', 'Invalid post ID.', array('status' => 404) );
		    }

		    $response = $this->prepare_item_for_response( $result[0], $request );

		    return $response;
		}

		/**
		 * Prepare post response.
		 *
		 * @param WP_Post $post_obj The post object whose response is being prepared.
		 */
		public function prepare_item_for_response( $post_obj, $request ) {
			global $post;
			$post = $post_obj;
			setup_postdata( $post );

			$post_id = $post_obj->ID;
			$post_data = array();
			$feature_img_id = (int) get_post_thumbnail_id( $post_id );

			// Yoast extension
			$yoast_meta = array();
			if ( defined( 'WPSEO_FILE' ) ) {
				$yoast_frontend = parent::yoast_to_rest();
				$yoast_meta = $yoast_frontend->wp_api_encode_yoast( $post_id );
			}

			$post_data['id'] = $post_id;
			$post_data['slug'] = $post->post_name;
			$post_data['link'] = get_the_permalink();
			$post_data['post_type'] = get_post_type();
			$post_data['title'] = get_the_title();
			$post_data['content'] = apply_filters( 'the_content', get_the_content() );
			$post_data['excerpt'] = apply_filters( 'the_excerpt', get_the_excerpt() );
			// $post_data['blocks'] = parse_blocks( $post_obj->post_content );
			$post_data['categories'] = get_the_category( $post_id );
			$post_data['date'] = $post->post_date;
			$post_data['date_gmt'] = $post->post_date_gmt;
			$post_data['yoast_meta'] = $yoast_meta;
			$post_data['author'] = array(
				'display_name' 	=> get_the_author_meta( 'display_name' ),
				'avatar_src' 	=> get_avatar_url( get_the_author_meta( 'ID' ), array( 'gravatar_default' ) ),
			);
			$post_data['featured_media'] = array(
				'id' => $feature_img_id !== 0 ? $feature_img_id : false,
				'sizes' => array(
					'full' => get_the_post_thumbnail_url( $post_id, 'full' ),
					'large' => get_the_post_thumbnail_url( $post_id, 'large' ),
					'medium' => get_the_post_thumbnail_url( $post_id, 'medium'),
					'tkr-custom-thumbnail' => get_the_post_thumbnail_url( $post_id, 'tkr-custom-thumbnail' ),
				),
				'meta' => array(
					'title' => get_the_title( get_post_thumbnail_id( $post_id ) ),
					'alt' => get_the_post_thumbnail_caption( $post_id ),
				)
			);

			wp_reset_postdata();
			
		    return rest_ensure_response( $post_data );
		}
	}
endif;

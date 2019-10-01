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
			register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', array(
				array(
					'methods'  			  => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
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
		 * Get a single post
		 *
		 * @since  1.0.0
		 * @return array The published post
		 */
		public function get_item( $request ) {
			$id = (int) $request['id'];
		    $post = get_post( $id );

		    if ( empty( $post ) ) {
		        return rest_ensure_response( array() );
		    }

		    $response = $this->prepare_item_for_response( $post );

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

		    $post_data = array();

			$post_data['id'] = get_the_ID();
			$post_data['slug'] = $post->post_name;
			$post_data['link'] = get_the_permalink();
			$post_data['title'] = get_the_title();
			$post_data['date'] = $post->post_date;
			$post_data['date_gmt'] = $post->post_date_gmt;
			$post_data['author'] = get_the_author_meta( 'display_name' );
			$post_data['content'] = apply_filters( 'the_content', get_the_content() );
			$post_data['excerpt'] = apply_filters( 'the_excerpt', get_the_excerpt() );
			$post_data['featured_media_src'] = get_the_post_thumbnail_url();

			wp_reset_postdata();

		    return rest_ensure_response( $post_data );
		}

	}
endif;

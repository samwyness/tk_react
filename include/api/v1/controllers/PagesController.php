<?php
/**
 * TKR REST API Custom Pages routes
 *
 * Description: Extends TKR API with WordPress page routes.
 *
 */

if ( ! class_exists( 'TKR_REST_Pages_Controller' ) ) :
	/**
	 * TKR REST Pages class.
	 *
	 * @package TKR_API
	 * @since 1.0.0
	 */
	class TKR_REST_Pages_Controller extends TKR_REST_Controller {

		/**
	     * Constructor.
	     */
		public function __construct() {
			$this->rest_base = 'pages';
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
		 * Get all pages and output rest response
		 *
		 * @param WP_REST_Request $request Current request.
		 * @return array All published pages
		 */
		public function get_items( $request ) {
			$args = array (
				'post_type' => 'page',
		    	'post_status' => 'publish',
				'numberposts' => -1,
		  	);
			$pages = get_posts( $args );

			$collection = array();

		    if ( empty( $pages ) ) {
		        return rest_ensure_response( $collection );
		    }

			foreach ( $pages as $page ) {
		    	$response = $this->prepare_item_for_response( $page, $request );
		    	$collection[] = $this->prepare_response_for_collection( $response );
			}

		    return rest_ensure_response( $collection );
		}


		/**
		 * Get Page
		 *
		 * @since  1.0.0
		 * @return array The published page
		 */
		public function get_item( $request ) {
			$id = (int) $request['id'];
		    $page = get_post( $id );

		    if ( empty( $page ) ) {
		        return rest_ensure_response( array() );
		    }

		    $response = $this->prepare_item_for_response( $page );

		    return $response;
		}

		/**
		 * Prepare page response.
		 *
		 * @param WP_Post $page_obj The page object whose response is being prepared.
		 */
		public function prepare_item_for_response( $page_obj, $request ) {
			global $post;
			$post = $page_obj;
			setup_postdata( $post );

		    $page_data = array();

			$page_data['id'] = get_the_ID();
			$page_data['slug'] = $post->post_name;
			$page_data['link'] = get_the_permalink();
			$page_data['title'] = get_the_title();
			$page_data['content'] = apply_filters( 'the_content', get_the_content() );
			$page_data['featured_media_src'] = get_the_post_thumbnail_url();
			$page_data['custom_title'] = get_post_meta( get_the_ID(), 'tk_page_custom_title', true );
			$page_data['custom_bg'] = get_post_meta( get_the_ID(), 'tk_page_bg_color', true );

			wp_reset_postdata();

		    return rest_ensure_response( $page_data );
		}

	}
endif;

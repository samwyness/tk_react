<?php
/**
 * TKR REST API Custom Posts routes
 *
 * Description: Extends TKR API with WordPress post routes.
 *
 */

if ( ! class_exists( 'TKR_REST_Posts_Controller' ) ) :
	/**
	 * TKR REST Posts class.
	 *
	 * @package TKR_API
	 * @since 1.0.0
	 */
	class TKR_REST_Controller extends WP_REST_Controller {

		protected $controller = null;

		/**
	     * Constructor.
	     *
	     * @param string $post_type Post type.
	     */
		public function __construct() {
	        $this->namespace = 'tkr/v1';
			$this->controller = get_class( $this );
	    }


		/**
		 * Checks for item permissions.
		 *
		 * @param WP_REST_Request $request Current request.
		 */
		public function get_item_permissions_check( $request ) {
		    // if ( ! current_user_can( 'read' ) ) {
		    //     return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the post resource.' ), array( 'status' => $this->authorization_status_code() ) );
		    // }
		    return true;
		}


		/**
		 * Prepare a response for inserting into a collection of responses.
		 *
		 * @param WP_REST_Response $response Response object.
		 * @return array Response data, ready for insertion into collection data.
		 */
		public function prepare_response_for_collection( $response ) {
		    if ( ! ( $response instanceof WP_REST_Response ) ) {
		        return $response;
		    }

		    $data = (array) $response->get_data();

		    return $data;
		}


		// Sets up the proper HTTP status code for authorization.
		public function authorization_status_code() {
		    $status = 401;

		    if ( is_user_logged_in() ) {
		        $status = 403;
		    }

		    return $status;
		}
	}
endif;

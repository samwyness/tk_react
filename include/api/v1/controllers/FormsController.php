<?php

/**
 * TKR REST API User routes
 *
 * Description: Extends TKR API with WordPress page routes.
 *
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
if (!class_exists('TKR_REST_Forms_Controller')) :
    /**
     * TKR REST User class.
     *
     * @package API
     * @since 1.0.0
     */
    class TKR_REST_Forms_Controller extends TKR_REST_Controller
    {

        public function __construct()
        {
            $this->rest_base = '/forms';
            parent::__construct();
        }


        /**
         * Register user routes for TKR API.
         *
         * @package API
         * @since  1.0.0
         */
        public function register_routes()
        {
            register_rest_route($this->namespace, '/' . $this->rest_base, array(
                array(
                    'methods'  => WP_REST_Server::CREATABLE,
                    'callback' => array($this, 'send_contact_form_data')
                )
            ));
        }


        /**
         * Send Contact Form Data
         *
         * @param WP_REST_Request $request Current request.
         * @return bool Mail sent success
         */
        public function send_contact_form_data($request)
        {
            $params = $request->get_params();

            // Form data parameters
            $first_name         = $params['first_name'];
            $last_name             = $params['last_name'];
            $contact_number     = $params['contact_number'];
            $work_email         = $params['work_email'];
            $company_website     = $params['company_website'];
            $industry             = $params['industry'];
            $notes                 = $params['notes'];

            $to = array('nic@icomplii.com', 'sam@miifile.com'); // admin email
            $from = $params['work_email'];
            $subject = 'New Client Contact Request - Sent from icomplii.com';
            $message =
                "Client Details:" . "\r\n" .
                "\r\n" .
                "Name: ###first_name### ###last_name###" . "\r\n" .
                "Contact Number: ###contact_number###" . "\r\n" .
                "Work Email: ###work_email###" . "\r\n" .
                "Company Website: ###company_website###" . "\r\n" .
                "Industry: ###industry###" . "\r\n" .
                "\r\n" .
                "Additional Notes:" . "\r\n" .
                "###notes###" . "\r\n" .
                "\r\n" .
                "Sent from contact form at icomplii.com";

            $message = str_replace('###first_name###', $first_name, $message);
            $message = str_replace('###last_name###', $last_name, $message);
            $message = str_replace('###contact_number###', $contact_number, $message);
            $message = str_replace('###work_email###', $work_email, $message);
            $message = str_replace('###company_website###', $company_website, $message);
            $message = str_replace('###industry###', $industry, $message);
            $message = str_replace('###notes###', $notes, $message);

            $headers = array(
                'Reply-To: ' . $first_name . ' ' . $last_name . '<' . $work_email . '>;',
                'Return-Path: ' . $first_name . ' ' . $last_name . '<' . $work_email . '>;'
            );

            $send_email = wp_mail($to, $subject, $message, $headers);

            if ($send_email) {
                return true;
            }

            return 'Woops something went wrong. Please try again.';
        }
    }
endif;

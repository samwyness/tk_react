<?php
/**
 *
 * The template for displaying the header
 *
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="ltr">

    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="theme-color" content="#ffffff">
        <meta name="description" content="<?php bloginfo( 'description' ); ?>">

        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

        <!-- <link rel="manifest" href="./manifest.json"> -->

        <?php wp_head(); ?>
	</head>

    <body <?php body_class(); ?>>

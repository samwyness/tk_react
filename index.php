<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * If you dont want the generatic wordpress header and footer and want to
 * go full React remove/comment out the 'wp_head' and 'wp_footer' calls.
 *
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="ltr">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php wp_head(); ?>
</head>

<body>

    <div id="root"></div>

    <?php include_once 'dist/icon-sprite.svg' ?>

    <?php wp_footer(); ?>

</body>

</html>

<?php

namespace IndiciaInteractiv\Theme\Extras;

use IndiciaInteractiv\Theme\Setup;

/**
 * Add <body> classes
 *
 * @param array $classes Array of body-classes.
 *
 * @return array
 */
function filter__body_class( $classes ) {
	// Add page slug if it doesn't exist.
	if ( is_single() || is_page() && ! is_front_page() ) {
		if ( ! in_array( basename( get_permalink() ), $classes, true ) ) {
			$classes[] = basename( get_permalink() );
		}
	}

	// Add class if sidebar is active.
	if ( Setup\display_sidebar() ) {
		$classes[] = 'sidebar-primary';
	}

	// Add development class on (you guessed it) development environment.
	if ( defined( 'WP_ENV' ) && 'development' === WP_ENV ) {
		$classes[] = WP_ENV;
	}

	return $classes;
}

add_filter( 'body_class', __NAMESPACE__ . '\\filter__body_class' );

/**
 * Clean up the_excerpt()
 */
function filter__excerpt_more() {
	return ' &hellip; <a href="' . get_permalink() . '">' . __( 'Vervolgd', 'indicia-theme' ) . '</a>';
}

add_filter( 'excerpt_more', __NAMESPACE__ . '\\filter__excerpt_more' );

/**
 * Foundation_Nav_Menu.
 *
 * Nav_Menu Walker to alter submenu rendering.
 *
 * @access  public
 * @package IndiciaInteractiv\Theme\Extras
 */
class Foundation_Nav_Menu extends \Walker_Nav_Menu {
	function start_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = str_repeat( "\t", $depth );
		$output .= "\n$indent<ul class=\"menu\">\n";
	}
}

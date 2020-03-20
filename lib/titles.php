<?php

namespace IndiciaInteractiv\Theme\Titles;

/**
 * Page titles
 */
function title() {
	if ( is_home() ) {
		if ( get_option( 'page_for_posts', true ) ) {
			return get_the_title( get_option( 'page_for_posts', true ) );
		} else {
			return;
			return __( 'Laatste berichten', 'indicia-theme' );
		}
	} elseif ( is_archive() ) {
		return get_the_archive_title();
	} elseif ( is_search() ) {
		return sprintf( __( 'Zoekresultaten voor %s', 'indicia-theme' ), get_search_query() );
	} elseif ( is_404() ) {
		return __( 'Niet gevonden', 'indicia-theme' );
	} else {
		return get_the_title();
	}
}

function heading( $heading = "", $title = "", $args = [] ) {
	if ( $title == "" ) {
		return false;
	}

	if ( $heading == "" ) {
		$heading = "h2";
	}

	$arguments = "";

	if ( is_array( $args ) ) {
		foreach ( $args as $key => $argument ) {
			( $arguments == "" ) ? $arguments .= esc_attr($key) . '="' . esc_attr($argument) . '"' : $arguments .= ' ' . esc_attr($key) . '="' . esc_attr($argument) . '"';
		}
	}

	return '<' . esc_attr( $heading ) . ' ' . $arguments . '>' . esc_html( $title ) . '</' . esc_attr( $heading ) . '>';
}

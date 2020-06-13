<?php

namespace IndiciaInteractiv\Theme\Setup;

use IndiciaInteractiv\Theme\Assets;

/**
 * Theme setup
 */
function action__after_setup_theme() {

	// Make theme available for translation
	load_theme_textdomain( 'indicia-theme', get_template_directory() . '/lang' );

	// Enable plugins to manage the document title
	// http://codex.wordpress.org/Function_Reference/add_theme_support#Title_Tag.
	add_theme_support( 'title-tag' );

	// Register wp_nav_menu() menus
	// http://codex.wordpress.org/Function_Reference/register_nav_menus.
	register_nav_menus( [
		'primary_navigation' => __( 'Hoofd Navigatie', 'indicia-theme' ),
	] );

	// Enable post thumbnails
	// http://codex.wordpress.org/Post_Thumbnails
	// http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
	// http://codex.wordpress.org/Function_Reference/add_image_size.
	add_theme_support( 'post-thumbnails' );

	// Enable post formats
	// http://codex.wordpress.org/Post_Formats
	add_theme_support( 'post-formats', [ 'aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio' ] );

	// Enable HTML5 markup support
	// http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5.
	add_theme_support( 'html5', [ 'caption', 'comment-form', 'comment-list', 'gallery', 'search-form' ] );

	// Gutenberg full width block support
	add_theme_support( 'align-wide' );

	// Use main stylesheet for visual editor
	// To add custom styles edit /assets/styles/layouts/_tinymce.scss.
	add_editor_style( Assets\asset_path( '/styles/main.css' ) );

	// Make sure YouTube embeds display properly
	add_theme_support( 'responsive-embeds' );

}

add_action( 'after_setup_theme', __NAMESPACE__ . '\\action__after_setup_theme' );

/**
 * Register sidebars
 */
function action__widgets_init() {
	register_sidebar( [
		'name'          => __( 'Footer', 'indicia-theme' ),
		'id'            => 'sidebar-footer',
		'before_widget' => '<section class="cell small-12 medium-4 large-3 widget %1$s %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>',
	] );
}

add_action( 'widgets_init', __NAMESPACE__ . '\\action__widgets_init' );

/**
 * Determine which pages should NOT display the sidebar
 */
function display_sidebar() {
	static $display;

	isset( $display ) || $display = ! in_array( true, [
		// The sidebar will NOT be displayed if ANY of the following return true.
		// @link https://codex.wordpress.org/Conditional_Tags.
		is_404(),
		is_front_page(),
	], true );

	return apply_filters( 'indicia_theme_display_sidebar', $display );
}

/**
 * Theme assets
 */
function action__wp_enqueue_scripts() {
	//wp_enqueue_style( 'google_fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap', false, null );
	wp_enqueue_style( 'indicia_theme_css', Assets\asset_path( '/styles/main.css' ), false, null );

	if ( is_single() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_enqueue_script( 'indicia_theme_js', Assets\asset_path( '/scripts/main.js' ), [ 'jquery' ], null, true );
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\action__wp_enqueue_scripts', 100 );

function action__enqueue_block_editor_assets() {
	// Add magellan tags
	wp_enqueue_script(
		'indicia_editor_js',
		Assets\asset_path( '/scripts/editor.js' ),
		[ 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ],
		null
	);
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\action__enqueue_block_editor_assets' );

function action__order_definitions( $query ) {
	if ( 'definition' === $query->get( 'post_type' ) ) {
		$query->set( 'orderby', 'title' );
		$query->set( 'order', 'ASC' );
	}
}

add_action( 'pre_get_posts', __NAMESPACE__ . '\\action__order_definitions' );

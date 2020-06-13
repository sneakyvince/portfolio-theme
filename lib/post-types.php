<?php

namespace Indicia\Theme\PostTypes;

// Register Custom Post Type
function action__custom_post_type() {
	$labels  = array(
		'name'                  => _x( 'Definities', 'Post Type General Name', 'portfolio-theme' ),
		'singular_name'         => _x( 'Definitie', 'Post Type Singular Name', 'portfolio-theme' ),
		'menu_name'             => __( 'Definities', 'portfolio-theme' ),
		'name_admin_bar'        => __( 'Definities', 'portfolio-theme' ),
		'archives'              => __( 'Definitie Archieven', 'portfolio-theme' ),
		'attributes'            => __( 'Definitie Attributen', 'portfolio-theme' ),
		'parent_item_colon'     => __( 'Parent Definitie:', 'portfolio-theme' ),
		'all_items'             => __( 'Alle definities', 'portfolio-theme' ),
		'add_new_item'          => __( 'Voeg Nieuwe Definitie', 'portfolio-theme' ),
		'add_new'               => __( 'Add New', 'portfolio-theme' ),
		'new_item'              => __( 'Nieuwe Definitie', 'portfolio-theme' ),
		'edit_item'             => __( 'Edit Definitie', 'portfolio-theme' ),
		'update_item'           => __( 'Update Definitie', 'portfolio-theme' ),
		'view_item'             => __( 'Bekijk Definitie', 'portfolio-theme' ),
		'view_items'            => __( 'View Definities', 'portfolio-theme' ),
		'search_items'          => __( 'Zoek Definitie', 'portfolio-theme' ),
		'not_found'             => __( 'Not found', 'portfolio-theme' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'portfolio-theme' ),
		'featured_image'        => __( 'Featured Image', 'portfolio-theme' ),
		'set_featured_image'    => __( 'Set featured image', 'portfolio-theme' ),
		'remove_featured_image' => __( 'Remove featured image', 'portfolio-theme' ),
		'use_featured_image'    => __( 'Use as featured image', 'portfolio-theme' ),
		'insert_into_item'      => __( 'Voeg in bij definitie', 'portfolio-theme' ),
		'uploaded_to_this_item' => __( 'Geüploaded naar deze definitie', 'portfolio-theme' ),
		'items_list'            => __( 'Definities lijst', 'portfolio-theme' ),
		'items_list_navigation' => __( 'Definities lijst navigatie', 'portfolio-theme' ),
		'filter_items_list'     => __( 'Filter definities lijst', 'portfolio-theme' ),
	);
	$rewrite = array(
		'slug'       => 'definities',
		'with_front' => true,
		'pages'      => false,
		'feeds'      => true,
	);
	$args    = array(
		'label'               => __( 'Definitie', 'portfolio-theme' ),
		'description'         => __( 'Definities overzicht', 'portfolio-theme' ),
		'labels'              => $labels,
		'show_in_rest'        => true,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'taxonomies'          => array( 'category', 'post_tag' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-book',
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => true,
		'can_export'          => true,
		'has_archive'         => 'definities',
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => $rewrite,
		'capability_type'     => 'page',
	);
	register_post_type( 'definition', $args );

}

add_action( 'init', __NAMESPACE__ . '\\action__custom_post_type', 0 );

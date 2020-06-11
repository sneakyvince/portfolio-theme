<?php

namespace Indicia\Theme\PostTypes;

use Indicia\PostTypes\PostTypes;

add_action( 'init', __NAMESPACE__ . '\\action__init' );
function action__init() {
	remove_post_type_support( 'page', 'editor' );

	try {
		PostTypes::get()
		         ->add( 'definition', [
			         'singular'   => __( 'Definitie', 'indicia-theme' ),
			         'name'       => __( 'Definities', 'indicia-theme' ),
			         'extra_args' => [
				         'rewrite'      => [
					         'slug' => _x( 'definities', 'Definities post type singular slug', 'indicia-theme' ),
//					         'walk_dirs' => false,
//					         'pages'     => true,
//					         'endpoints' => false
				         ],
				         'show_in_rest' => true,
				         //'supports' => array('editor'),
				         'supports'     => [ 'title', 'editor', 'custom-fields', 'excerpt', 'thumbnail' ],
				         //'supports'    => [ 'thumbnail', 'title', 'editor', 'revisions', 'excerpt' ],
				         'has_archive'  => true
			         ],
		         ] );
	} catch ( \Exception $e ) {
		echo $e->getMessage();
		die();
	}

}

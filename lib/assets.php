<?php

namespace IndiciaInteractiv\Theme\Assets;

function asset_path( $filename ) {
	$dist_path = get_template_directory() . '/dist/';
	static $manifest;
	if ( ! $manifest ) {
		$manifestPath = trailingslashit( $dist_path ) . 'mix-manifest.json';
		if ( ! file_exists( $manifestPath ) ) {
			throw new \Exception( 'The Mix manifest does not exist. Did you run `npm run dev`?' );
		}
		$manifest = json_decode( file_get_contents( $manifestPath ), true );
	}

	if ( ! array_key_exists( $filename, $manifest ) ) {
		throw new \Exception(
			"Unable to locate Mix file: {$filename}. Please check your " .
			'webpack.mix.js output paths and try again.'
		);
	}

	return file_exists( $dist_path . '/hot' )
		? "http://localhost:8080{$manifest[$filename]}"
		: get_template_directory_uri() . '/dist' . $manifest[ $filename ];
}
<?php

use IndiciaInteractiv\Theme\Assets;

?>

<div class="search-bar">
	<input type="text" class="search-bar__input" aria-label="search" placeholder="enter your search">
	<button class="search-bar__submit" aria-label="submit search">
		<?php
		$arrContextOptions = array(
			"ssl" => array(
				"verify_peer"      => false,
				"verify_peer_name" => false,
			),
		);
		echo file_get_contents( Assets\asset_path( '/icons/search-outline.svg' ), false, stream_context_create( $arrContextOptions ) )
		?>
	</button>
</div>

<?php

use IndiciaInteractiv\Theme\Assets;

?>

<header id="site-header" class="header">
	<div class="grid-container">
		<div class="title-bar" data-responsive-toggle="top-menu" data-hide-for="medium">
			<button class="menu-icon" type="button" data-toggle></button>
			<div class="title-bar-title">Menu</div>
		</div><!-- /title-bar -->

		<div class="top-bar">
			<nav class="top-bar-left">
				<a class="home" href="<?= esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php
					$arrContextOptions = array(
						"ssl" => array(
							"verify_peer"      => false,
							"verify_peer_name" => false,
						),
					);
					echo file_get_contents( Assets\asset_path( '/icons/globe-outline.svg' ), false, stream_context_create( $arrContextOptions ) )
					?>
					<span class="home__title">
						<?php bloginfo( 'name' ); ?>
					</span>
				</a>
			</nav>

			<nav class="top-bar-right">
				<ul class="dropdown menu is-dropdown-submenu-parent" data-dropdown-menu>
					<?php if ( has_nav_menu( 'primary_navigation' ) ) : ?>
						<?php wp_nav_menu( [
							'theme_location' => 'primary_navigation',
							'menu_class'     => 'nav',
							'container'      => '',
							'items_wrap'     => '%3$s',
							'walker'         => new IndiciaInteractiv\Theme\Extras\Foundation_Nav_Menu(),
						] ); ?>
					<?php endif; ?>
				</ul>
			</nav><!-- /top-bar-right -->

			<nav class="top-bar-search">
				<?php get_template_part( 'templates/search-bar' ); ?>
			</nav>
			<!-- /.top-bar-search -->
		</div><!-- /top-bar -->
	</div><!-- /grid-container -->
</header><!-- /header -->

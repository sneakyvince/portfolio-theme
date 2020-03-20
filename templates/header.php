<?php
$options = [
	"ssl" => [
		"verify_peer"      => false,
		"verify_peer_name" => false,
	]
];
?>

<header class="header">

<!--	<div class="header__blobs" id="header__blobs">-->
<!--		<h1 class="header__title">Portfolio: Gutenberg</h1>-->
<!--		--><?//= file_get_contents( IndiciaInteractiv\Theme\Assets\asset_path( '/images/blob-header.svg' ), false, stream_context_create( $options ) ) ?>
<!--		--><?php ////  get_template_part( IndiciaInteractiv\Theme\Assets\asset_path( '/images/blob-header.svg' ) ) ?>
<!--	</div>-->
	<nav class="nav" data-sticky-container>
		<div class="sticky" data-sticky data-margin-top="0">
			<div class="grid-container">
				<div class="title-bar" data-responsive-toggle="top-menu" data-hide-for="medium">
					<button class="menu-icon" type="button" data-toggle></button>
					<div class="title-bar-title">Menu</div>
				</div>
				<div class="top-bar anim-scroll--to-bottom" id="top-menu">
					<div class="top-bar-left">
						<ul class="menu">
							<li class="home">
								<a href="<?= esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
							</li>
						</ul>
					</div>

					<div class="top-bar-right">
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
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>

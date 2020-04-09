<footer class="footer">
	<div class="grid-container">

		<div class="footer__nav">
			<div class="grid-x grid-margin-x">
				<?php dynamic_sidebar( 'sidebar-footer' ); ?>
			</div>
		</div>

		<div class="footer__bottom">
			<div class="footer__copyright">
				<b>&copy;<?= date( ' Y ' ) ?><?= get_bloginfo( 'name' ) ?></b>

				<?php if ( has_nav_menu( 'footer_navigation' ) ) : ?>
					<?php wp_nav_menu( [
						'theme_location' => 'footer_navigation',
						'menu_class'     => 'footer__menu',
						'container'      => '',
					] ); ?>
				<?php endif; ?>
			</div>

			<div class="footer__back-to-top" data-smooth-scroll>
				<a href="#top-anchor"><?= esc_attr_x( 'Terug naar boven', 'Footer', 'indicia-theme' ) ?></a>
			</div><!-- /.footer__scroll-top -->
		</div><!-- /.footer__bottom -->
	</div>
</footer>

<footer class="footer">
	<div class="grid-container">
		<?php dynamic_sidebar( 'sidebar-footer' ); ?>

		<div class="footer__nav">
			<b class="footer__copyright">&copy;<?= date( ' Y ' ) ?><?= get_bloginfo( 'name' ) ?></b>

			<?php if ( has_nav_menu( 'footer_navigation' ) ) : ?>
				<?php wp_nav_menu( [
					'theme_location' => 'footer_navigation',
					'menu_class'     => 'footer__menu',
					'container'      => '',
				] ); ?>
			<?php endif; ?>
		</div>
	</div>
</footer>

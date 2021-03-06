<?php

use IndiciaInteractiv\Theme\Setup;
use IndiciaInteractiv\Theme\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<?php get_template_part( 'templates/head' ); ?>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<!--[if IE]>
<div class="alert alert-warning">
	<?php _e( 'U gebruikt een <strong>verouderde</strong> browser. We raden u aan om <a href="http://browsehappy.com/">een nieuwe versie te gebruiken</a> om te profiteren van alle mogelijkheden op de website.', 'indicia-theme' ); ?>
</div>
<![endif]-->

<div class="off-canvas-content site-off-canvas-content" data-off-canvas-content>
	<div id="top-anchor"></div> <!-- /#top-anchor -->
	<?php
	do_action( 'get_header' );
	get_template_part( 'templates/header' );
	?>
	<div class="wrap-container" id="wrap-container" role="document">
		<main id="main" class="main">
			<div id="content-start"></div>
			<?php include Wrapper\template_path(); ?>
		</main>

		<?php if ( Setup\display_sidebar() ) : ?>
			<aside class="sidebar">
				<?php include Wrapper\sidebar_path(); ?>
			</aside>
		<?php endif; ?>
	</div>
	<?php
	do_action( 'get_footer' );
	get_template_part( 'templates/footer' );
	wp_footer();
	?>
</div>
</body>
</html>

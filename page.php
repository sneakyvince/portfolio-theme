<?php while ( have_posts() ) : the_post(); ?>
	<?php get_template_part( 'templates/page', 'header' ); ?>
	<div class="grid-container">
		<?php get_template_part( 'templates/content', 'page' ); ?>
	</div><!-- /.grid-container -->
<?php endwhile; ?>

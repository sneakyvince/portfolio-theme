<?php get_template_part( 'templates/page', 'header' ); ?>

<?php if ( ! have_posts() ) : ?>
	<div class="alert alert-warning">
		<?php _e( 'Sorry, geen resultaten gevonden.', 'indicia-theme' ); ?>
	</div>
	<?php get_search_form(); ?>
<?php endif; ?>

<?php // Generates a grid view of recent posts ?>
<section class="section-wrap">
	<div class="grid-container">
		<div class="grid-x grid-margin-x grid-margin-y">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'templates/content', get_post_type() != 'post' ? get_post_type() : get_post_format() ); ?>
			<?php endwhile; ?>

			<div class="cell">
				<?php the_posts_navigation( [
					'mid_size'  => 9,
					'prev_text' => __( 'Ouder', 'indicia-theme' ),
					'next_text' => __( 'Nieuwer', 'indicia-theme' )
				] ); ?>
			</div>
		</div>
	</div>
</section>

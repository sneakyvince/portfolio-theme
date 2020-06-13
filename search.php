<?php get_template_part( 'templates/page', 'header' ); ?>

<?php // Generates a grid view of recent posts ?>
<section class="section-wrap">
	<div class="grid-container">

		<?php if ( ! have_posts() ) : ?>
			<div class="alert alert-warning">
				<?php _e( 'Sorry, geen resultaten gevonden.', 'indicia-theme' ); ?>
			</div>
			<?php get_search_form(); ?>
		<?php endif; ?>

		<div class="grid-x grid-margin-x grid-margin-y">
			<?php while ( have_posts() ) : the_post(); ?>
				<div class="item cell small-12 medium-6 large-4">
					<div class="item__inner">
						<?php
						get_template_part(
							'templates/content',
							'search'
						); ?>
					</div>
				</div>
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


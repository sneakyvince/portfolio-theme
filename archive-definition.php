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
		<div class="grid-x grid-margin-x">
			<div class="entry-content cell small-12 medium-3 large-2" data-sticky-container>
				<div class="sticky" id="sticky" data-sticky data-margin-top="6.25" data-anchor="definitions-grid">
					<?php get_template_part( 'templates/definition/definition-magellan' ); ?>
				</div>
			</div>

			<div id="definitions-grid" class="cell small-12 large-10">
				<div class="grid-x grid-margin-x grid-margin-y grid-padding-x">
					<?php
					$title_previous = '';
					while ( have_posts() ) : the_post();
						$title         = get_the_title();
						$title_current = $title[0];

						if ( $title_current !== $title_previous ) {
							get_template_part( 'templates/definition/definition-header' );
							$title_previous = $title_current;
						}

						get_template_part( 'templates/definition/definition-content' );
					endwhile;
					?>
				</div>
			</div>

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

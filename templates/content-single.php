<?php get_template_part( 'templates/single', 'header' ); ?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="section-wrap--content">
		<article <?php post_class(); ?>>
			<div class="grid-container">
				<div class="grid-x grid-margin-x">
					<div id="entry-content" class="entry-content cell small-12 large-9">
						<?php the_content(); ?>
					</div>

					<div class="cell small-12 large-3" data-sticky-container>
						<div class="sticky" id="sticky" data-sticky data-margin-top="4" data-anchor="entry-content">
							<?php get_template_part( 'templates/content', 'magellan' ); ?>
						</div>
					</div>

					<footer class="cell small-12">
						<?php wp_link_pages( [
							'before' => '<nav class="page-nav"><p>' . __( 'Pagina\'s:', 'indicia-theme' ),
							'after'  => '</p></nav>',
						] ); ?>
					</footer>
				</div>
			</div>
		</article>
	</section>

	<!--	<section>-->
	<!--		<div class="grid-container">-->
	<!--			--><?php //get_template_part( 'templates/navigation' ); ?>
	<!--		</div>-->
	<!--	</section>-->

<?php endwhile; ?>

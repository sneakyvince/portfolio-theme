<?php
/**
 * Parses dynamic blocks out of `post_content` and re-renders them.
 *
 * @param string $content Post content.
 *
 * @return string Updated post content.
 * @since 5.0.0
 * @global WP_Post $post The post to edit.
 *
 */
$post = get_post();

if ( has_blocks( $post->post_content ) ) {
	$blocks = parse_blocks( $post->post_content );

//	wp_die(var_dump( $blocks ));

	foreach ( $blocks as $block ) {
		if ( $blocks[0]['blockName'] === 'core/heading' ) {

		}
	}
}

?>
<?php get_template_part( 'templates/single', 'header' ); ?>

<?php while ( have_posts() ) : the_post(); ?>
	<section class="section-wrap">
		<article <?php post_class(); ?>>
			<div class="grid-container">
				<div class="grid-x grid-margin-x">
					<div class="cell small-12">
						<?php get_template_part( 'templates/entry-meta' ); ?>
					</div>

					<div id="entry-content" class="entry-content cell small-12 large-8">
						<?php the_content(); ?>
					</div>

					<div class="entry-content cell small-12 large-4" data-sticky-container>
						<div class="sticky" data-sticky data-anchor="entry-content" data-margin-top="0">
							<div>
								<?php
								// Get post content to extract slider shortcode.
								//						$blocks = parse_blocks( get_the_content() );
								//						foreach ( $blocks as $block ) {
								//							if ( 'soliloquy/soliloquywp' === $block['blockName'] ) {
								//								echo 'bruh 😤';
								//								break;
								//							}
								//						}
								// Display the title.?>
							</div>
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

	<section>
		<div class="grid-container">
			<?php get_template_part( 'templates/navigation' ); ?>
		</div><!-- /.grid-container -->
	</section>
<?php endwhile; ?>

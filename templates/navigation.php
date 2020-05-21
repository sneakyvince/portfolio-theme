<?php
/**
 * Displays the next and previous post navigation in single posts.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

$next_post = get_next_post();
$prev_post = get_previous_post();


?>

<div class="grid-container">
	<div class="grid-x">
		<?php foreach ( $posts as $post ) : ?>
			<div class="cell small-12 medium-6">
				<a href="<?= get_permalink(); ?>" <?php post_class(); ?>>
					<div class="item__inner">
						<article class="article">
							<?php if ( $thumb ) : ?>
								<?php the_post_thumbnail( 'small', [ 'class' => 'article__image' ] ); ?>
							<?php endif ?>

							<header class="article__header">
								<?php if ( $category ) : ?>
									<span class="article__category"><?= $category[0]->name; ?></span>
								<?php endif; ?>

								<time class="updated"
								      datetime="<?= get_post_time( 'c', true ); ?>"><?= get_the_date( 'j F' ); ?></time>

								<?php if ( $title ) : ?>
									<h3 class="article__title">
										<?= $title; ?>
									</h3>
								<?php endif; ?>

								<?php if ( $excerpt ) : ?>
									<p class="article__excerpt">
										<?= wp_trim_words( strip_tags( $excerpt ), 20 ); ?>
									</p>
								<?php endif; ?>
							</header>

							<footer class="article__footer">
									<span class="article__read-more">
										<?= esc_html_x( 'Lees meer', 'Artikel overicht', 'indicia-theme' ) ?>
									</span>
							</footer>
						</article>
					</div>
				</a>
			</div>

		<?php endforeach; ?>
	</div>
</div>


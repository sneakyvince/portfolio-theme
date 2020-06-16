<?php
$title    = get_the_title();
$category = get_the_category();
$excerpt  = get_the_excerpt();
$thumb    = get_the_post_thumbnail();
?>

<a href="<?= get_permalink(); ?>" <?php post_class( 'article__link' ); ?>>
	<article class="article">
		<?php if ( $thumb ) : ?>
			<?php the_post_thumbnail( 'small', [ 'class' => 'article__image' ] ); ?>
		<?php else : ?>
			<div class="article__placeholder">
				<?= esc_html( $title ? $title[0] : '?' ); ?>
			</div>
		<?php endif ?>

		<header class="article__header">
			<?php if ( $category ) : ?>
				<span class="article__category">
					<?= $category[0]->name; ?>
				</span>
			<?php endif; ?>

			<time class="updated" datetime="<?= get_post_time( 'c', true ); ?>"><?= get_the_date( 'j F' ); ?></time>

			<?php if ( $title ) : ?>
				<h4 class="article__title">
					<?= $title; ?>
				</h4>
			<?php endif; ?>

			<?php if ( $excerpt ) : ?>
				<p class="article__excerpt">
					<?= wp_trim_words( strip_tags( $excerpt ), 20 ); ?>
				</p>
			<?php endif; ?>
		</header>

		<footer class="article__footer">
			<span class="article__read-more button">
				<?= esc_html_x( 'Lees meer', 'Artikel overicht', 'indicia-theme' ) ?>
			</span>
		</footer>
	</article>
</a>

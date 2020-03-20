<?php
$title    = get_the_title();
$category = get_the_category();
$excerpt  = get_the_excerpt();
$thumb    = get_the_post_thumbnail();
?>

<a href="<?= get_permalink(); ?>" class="item cell small-12 medium-6 large-4" <?php post_class(); ?>>
	<div class="item__dotted-lines animate-gsap"></div>
	<div class="item__dotted-lines"></div>

	<article class="article animate-gsap <?= ( $thumb ) ? 'article--background-image' : '' ?>">
		<?php if ( $thumb ) : ?>
			<div class="article__overlay"></div>
			<?php the_post_thumbnail( 'thumbnail', [ 'class' => 'article__image' ] ); ?>
		<?php endif ?>

		<header class="article__header">
			<?php if ( $title ) : ?>
				<h3 class="article__title">
					<?= $title; ?>
				</h3>
			<?php endif; ?>

			<?php if ( $excerpt && ! $thumb ) : ?>
				<p class="article__excerpt">
					<?= wp_trim_words( strip_tags( $excerpt ), 20 ); ?>
				</p>
			<?php endif; ?>
		</header>

		<footer class="article__footer">
			<?php if ( $category ) : ?>
				<span class="article__category">
					<?= $category[0]->name; ?>
				</span>

			<span class="article__read-more">
				<?= esc_html_x( 'Lees meer', 'Artikel overicht', 'indicia-theme' ) ?>
			</span>
			<?php endif; ?>
		</footer>
	</article>
</a>

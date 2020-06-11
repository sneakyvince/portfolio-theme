<?php
$title = get_the_title();
?>
<div class="item cell small-12 medium-12 large-6">
	<div class="item__inner">
		<article class="definition">
			<h4 class="hashed-header" id="<?= sanitize_title_with_dashes( $title ) ?>">
				<a class="hashed-header__link" href="#<?= sanitize_title_with_dashes( $title ) ?>"></a>
				<?= $title ?>
			</h4>
			<?php the_content(); ?>
		</article>
	</div>
</div>

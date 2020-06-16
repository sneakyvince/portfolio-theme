<?php use IndiciaInteractiv\Theme\Titles; ?>

<header class="single-header">
	<div class="grid-container">
		<div class="grid-x">
			<div class="cell small-12">
				<?php get_template_part( 'templates/entry-meta' ); ?>

				<h1 class="single-header__title"><?= Titles\title(); ?></h1>
			</div>

			<div class="cell small-12">
				<?= get_the_post_thumbnail( get_the_ID(), 'xlarge', [ 'class' => 'single-header__image' ] ) ?>
			</div>

			<div class="cell small-12">
				<div class="single-header__line"></div>
			</div>
		</div>
	</div>
</header>


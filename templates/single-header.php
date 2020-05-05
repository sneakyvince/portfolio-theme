<?php use IndiciaInteractiv\Theme\Titles; ?>

<header id="content-header" class="content-header single-header">
	<div class="grid-container">

		<div class="grid-x">
			<div class="cell small-12 medium-6 large-12">
				<?php get_template_part( 'templates/entry-meta' ); ?>

				<h1 class="content-header__title"><?= Titles\title(); ?></h1>
			</div>

			<div class="cell small-12 medium-6 large-12">
				<?= get_the_post_thumbnail( get_the_ID(), 'large', [ 'class' => 'content-header__image' ] ) ?>
			</div>

			<div class="cell small-12 medium-6 large-12">
				<div class="content-header__line"></div>
			</div>
		</div>
	</div>
</header>


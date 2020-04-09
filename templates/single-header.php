<?php use IndiciaInteractiv\Theme\Titles; ?>

<header id="content-header" class="single-header">
	<div class="grid-container">


		<!-- /.single-header__background-image -->


		<div class="single-header__inner">
			<div class="single-header__background-image">
				<?= get_the_post_thumbnail( get_the_ID(), 'large' ) ?>
			</div>

			<div class="single-header__overlay"></div>
			<!-- /.single-header__overlay -->

			<div class="single-header__title">
				<h1><?= Titles\title(); ?></h1>
			</div>
			<!-- /.single-header__title -->

		</div>
	</div>
</header>


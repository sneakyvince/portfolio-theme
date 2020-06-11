<?php

$title_previous = '';
$alphabet       = [];

while ( have_posts() ) : the_post();
	$title         = get_the_title();
	$title_current = $title[0];

	if ( $title_current !== $title_previous ) {
		$title_previous = $title_current;
		$alphabet[]     = $title_current;
	}
endwhile;
?>

<div class="magellan">
	<div class="magellan__title">
		<?= esc_html__( 'Definities', 'indicia-theme' ) ?>
	</div>

	<div class="magellan__body">
		<ul class="vertical menu" data-magellan data-threshold="90"
		    data-animation-easing="swing" data-animation-duration="1000">
			<?php foreach ( $alphabet as $letter ) : ?>
				<li class="magellan__item">
					<a href="#magellan-<?= esc_attr( $letter ) ?>">
						<?= esc_html( $letter ) ?>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>

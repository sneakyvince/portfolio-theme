<?php
function get_block_id( $block ) {
	if ( $block['blockName'] !== 'core/heading' ) {
		return false;
	}

	$block_html = $block['innerHTML'];
	$id_start   = strpos( $block_html, 'id="' );

	if ( $id_start === false ) {
		return false;
	}

	$id_start += 4;
	$id_end   = strpos( $block_html, '"', $id_start );
	$block_id = substr( $block_html, $id_start, $id_end - $id_start );

	return $block_id;
}

$post              = get_post();
$blocks            = parse_blocks( $post->post_content );
$table_of_contents = [];

foreach ( $blocks as $block ) {
	$block_id = get_block_id( $block );

	if ( $block_id ) {
		$table_of_contents[ $block_id ] = wp_strip_all_tags( $block['innerHTML'] );
	}
}

if ( $table_of_contents ) : ?>

	<div class="magellan">
		<div class="magellan__title">
			<?= esc_html__( 'Inhoudsopgave', 'indicia-theme' ) ?>
		</div>

		<div class="magellan__body">
			<ul class="vertical menu" data-magellan data-threshold="90"
			    data-animation-easing="swing" data-animation-duration="1000">
				<?php foreach ( $table_of_contents as $anchor => $title ) : ?>
					<li class="magellan__item">
						<a href="#<?= esc_attr( $anchor ) ?>">
							<?= esc_html( $title ) ?>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
<?php endif;

<?php
$category      = get_the_category();
$category_name = $category[0]->name;
$category_link = get_category_link( $category[0] );
?>

<div class="entry-meta">
	<a class="entry-meta__category" href="<?= $category_link ?>">✏️ <?= $category_name ?></a>

	<div class="entry-meta__tags"><?php the_tags( '', '', '' ); ?></div>

	<time class="entry-meta__time updated" datetime="<?= get_post_time( 'c', true ); ?>">
		🕒 <?= get_the_date(); ?></time>
</div>

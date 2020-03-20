<?php
$category = get_the_category();
$category_name = $category[0]->name;
$category_link = get_category_link($category[0]);
?>

<time class="updated" datetime="<?= get_post_time( 'c', true ); ?>"><?= get_the_date(); ?></time>
<a href="<?= $category_link ?>"><?= $category_name ?></a>

<!--<p class="byline author vcard">--><?//= __( 'Door', 'indicia-theme' ); ?>
<!--	<a href="--><?//= get_author_posts_url( get_the_author_meta( 'ID' ) ); ?><!--" rel="author" class="fn">--><?//= get_the_author(); ?><!--</a>-->
<!--</p>-->

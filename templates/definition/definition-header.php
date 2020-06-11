<?php
$title         = get_the_title();
$title_current = $title[0];
?>

<div class="item cell small-12">
	<div id="magellan-<?= $title_current ?>"
	     data-magellan-target="magellan-<?= $title_current ?>"
	     class="definition__separator">
		<h3 class="definition__alpha"><?= $title_current ?></h3>
	</div>
</div>

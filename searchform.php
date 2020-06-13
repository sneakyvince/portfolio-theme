<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
<div class="search-form__inner">
		<input class="search-form__input" type="text"  value="" name="s" id="s" placeholder="<?php echo esc_attr_x( 'Zoeken...', 'placeholder' ) ?>">

			<input type="submit" class="button search-form__submit"
			       value="<?php echo esc_attr_x( 'Zoek', 'submit button' ) ?>" />
</div>
</form>

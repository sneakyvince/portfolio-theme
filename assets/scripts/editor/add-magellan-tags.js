// Add custom namespace className to all plugin blocks.
console.log( 'test ' );

const addMagellanTag = ( extraProps, blockType, attributes ) => {
	// Don't proceed if not a heading block
	if ( blockType.name !== 'core/heading' ) {
		return;
	}

	// Don't proceed if there's no anchor set
	if ( ! attributes.anchor ) {
		return;
	}

	// Only set the Foundation Magellan tag IF there's also an anchor set
	extraProps[ 'data-magellan-target' ] = attributes.anchor;
	return extraProps
};

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'filter-add-magellan-tags',
	addMagellanTag
);

// Add custom namespace className to all plugin blocks.
console.log( 'add-heading-styles ' );

wp.domReady( () => {

	wp.blocks.registerBlockStyle( 'core/image', [
		{
			name      : 'circular-image',
			label     : 'Circularrrrrr',
			isDefault : false,
		},
		{
			name      : 'rounded-corners',
			label     : 'Rounded Corners',
			isDefault : false,
		}
	] );

	// wp.blocks.registerBlockStyle( 'core/heading', {
	// 	name      : 'default',
	// 	label     : 'Default',
	// 	isDefault : true,
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/heading', {
	// 	name  : 'pink',
	// 	label : 'Pink',
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/heading', {
	// 	name  : 'lightblue',
	// 	label : 'Light Blue',
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/heading', {
	// 	name  : 'yellow',
	// 	label : 'Yellow',
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/heading', {
	// 	name  : 'yellow',
	// 	label : 'Green',
	// } );

} );




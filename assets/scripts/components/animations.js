import gsap      from 'gsap'
import scrollama from 'scrollama'

const animationClasses = [
	'.anim-scroll--to-bottom',
	'.anim-scroll--to-top',
	'.anim-scroll--to-left',
	'.anim-scroll--to-right',
];

const getAnimation = ( response, animation ) => {
	let element = response.element;

	gsap.to( element, {
		autoAlpha : 1,
		y         : 0,
		duration  : 0.5,
		// clearProps : 'all',
	} );

	switch ( animation ) {
		case '.anim-scroll--to-right' :
		case '.anim-scroll--to-left' :
		case '.anim-scroll--to-bottom' :
		case '.anim-scroll--to-top' :
			gsap.to( element, {
				autoAlpha : 1,
				y         : 0,
				duration  : 0.5,
				// clearProps : 'all',
			} );
			break;

		// case '.animate-gsap' :
		// 	gsap.to( element, {
		// 		opacity    : 1,
		// 		y          : 25,
		// 		duration   : 0.5,
		// 		clearProps : 'all',
		// 	} );
		// 	break;
	}
};

// Instantiate the scrollama
const scroller = scrollama();

// Setup the instance, pass callback functions
scroller
	.setup( {
		        step   : animationClasses.join(),
		        debug  : true,
		        once   : true,
		        offset : 1,
	        } )
	.onStepEnter( getAnimation );

// Setup resize event
window.addEventListener( 'resize', scroller.resize );

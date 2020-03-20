// You can put homepage specific javascript here
import gsap      from 'gsap';
import scrollama from 'scrollama';

const tl = gsap.timeline();

// Instantiate the scrollama
const scroller = scrollama();

// Setup the instance, pass callback functions
// let targets = [];
//
// scroller
// 	.setup( {
// 		        step   : '.article.animate-gsap',
// 		        debug  : true,
// 		        once   : true,
// 		        offset : 1,
// 	        } )
// 	.onStepEnter( ( response ) => {
//
// 		targets.push( response.element );
//
// 		console.log( targets );
// 	} );
//
//
// // Setup resize event
// window.addEventListener( 'resize', scroller.resize );


let item = document.querySelectorAll( '.article.animate-gsap' );

let observer = new IntersectionObserver( function ( entries, self ) {
	let targets = entries.map( entry => {
		if ( entry.isIntersecting ) {
			self.unobserve( entry.target );
			console.log(entry.target)
			return entry.target;
		}
	} );

	gsap.to( targets, {
		duration : 0.5,
		opacity  : 1,
		stagger  : {
			amount : 0.5,
		},
	} );

	console.log( targets );
} );

for ( var i = 0; i < item.length; i++ ) {
	observer.observe( item[ i ] );
}

//
// gsap.to(targets, {
// 	opacity: 1,
// 	stagger: 0.2,
// });

// tl.to( element, {
// 	  duration  : 0.5,
// 	  autoAlpha : 0,
// 	  stagger   : {
// 		  amount : 1.5,
// 	  },
// 	  // clearProps : 'all', // Clear opacity so the hover animation stays working.
//   }, 'dotted-lines' )
//
//   .from( element, {
// 	         // delay     : 5,
// 	         duration  : 0.5,
// 	         autoAlpha : 0,
// 	         stagger   : {
// 		         amount : 1
// 	         },
//          }, 'dotted-lines+=0.25'
//   );

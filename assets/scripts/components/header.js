import gsap from 'gsap'

const header = document.getElementById( 'site-header' );
const contentStart = document.getElementById( 'content-start' );
const wrapContainer = document.getElementById( 'wrap-container' );
wrapContainer.style.marginTop = header.offsetHeight + 'px';

// Show the navbar on hover
let hover = false;
header.addEventListener( 'mouseleave', () => hover = false );
header.addEventListener( 'mouseenter', () => {
	hover = true;
	gsap.to( header, {
		duration : 0.4,
		opacity  : 1,
		ease     : 'power4.out'
	} );
} );

// Hide/show navbar on scroll
let didScroll = false;
let scrollThreshold = 5;
let opacity = 1;
let stickied = false;
let prevScrollPos = window.pageYOffset;

// Listen for when user scrolls
window.onscroll = () => {
	didScroll = true
};

// Only fire hasScrolled() every 10 ms
setInterval( () => {
	if ( didScroll ) {
		hasScrolled();
		didScroll = false;
	}
}, 10 );

function hasScrolled() {
	let currentScrollPos = window.pageYOffset;

	// Make sure they scroll more than delta
	if ( Math.abs( prevScrollPos - currentScrollPos ) <= scrollThreshold ) {
		return
	}

	// When the user is just about to scroll to the content start
	if ( currentScrollPos >= contentStart.offsetTop - header.offsetHeight ) {
		header.classList.add( 'header--surface' )
	}
	// When the user scrolled back to the top
	else if ( currentScrollPos <= 30 ) {
		header.classList.remove( 'header--surface' );
		stickied = false;
	}

	// Just for efficiency's sake
	if ( hover ) {
		return
	}

	// If user hasn't scrolled past header and the navbar is not stickied
	if ( ( currentScrollPos <= contentStart.offsetTop ) && ! stickied ) {
		// console.log( header.offsetHeight )
		opacity = Math.max( 0, 1 - currentScrollPos / 30 );
		stickied = false;
	}

	// If user scrolled past content start
	else {
		stickied = true;

		if ( currentScrollPos >= prevScrollPos ) {
			// When scrolling down, decrease opacity
			opacity -= ( currentScrollPos - prevScrollPos ) / 70;
		} else {
			// When scrolling up, increase opacity
			opacity += ( prevScrollPos - currentScrollPos ) / 70;
		}
		opacity = Math.max( Math.min( opacity, 1 ), 0 );
	}

	// Set the navbar opacity
	header.style.opacity = opacity.toString();

	// Set the prevScrollPos for the next time hasScrolled() is called
	prevScrollPos = currentScrollPos;
}

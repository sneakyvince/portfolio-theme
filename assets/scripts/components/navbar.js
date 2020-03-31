import gsap from 'gsap'

const navbar = document.getElementById( 'site-navbar' );
const header = document.getElementById( 'site-header' );
header.style.paddingTop = navbar.offsetHeight + 'px';

// Show the navbar on hover
let hover = false;
navbar.addEventListener( 'mouseleave', () => hover = false );
navbar.addEventListener( 'mouseenter', () => {
	hover = true;
	gsap.to( navbar, {
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
	didScroll = true;
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
	if ( Math.abs( prevScrollPos - currentScrollPos ) <= scrollThreshold )
		return;

	// When the user is just about to scroll past the header
	if ( currentScrollPos >= header.offsetHeight - navbar.offsetHeight ) {
		navbar.classList.add( 'navbar--surface' )
	}
	// When the user scrolled back to the top
	else if ( currentScrollPos <= 70 ) {
		navbar.classList.remove( 'navbar--surface' );
		stickied = false;
	}

	if ( hover )
		return;

	// If user hasn't scrolled past header and the navbar is not stickied
	if ( ( currentScrollPos <= header.offsetHeight ) && ! stickied ) {
		opacity = Math.max( 0, 1 - scrollY / 70 );
		stickied = false;
	}

	// If user scrolled past header
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
	navbar.style.opacity = opacity.toString();

	// Set the prevScrollPos for the next time hasScrolled() is called
	prevScrollPos = currentScrollPos;
}

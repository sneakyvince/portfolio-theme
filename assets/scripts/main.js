import $           from 'jquery';
import pageScripts from './pages';

import 'what-input';

// Node modules
if ( ! ( 'IntersectionObserver' in window ) ||
     ! ( 'IntersectionObserverEntry' in window ) ||
     ! ( 'intersectionRatio' in window.IntersectionObserverEntry.prototype ) ) {
	// load polyfill now
	require( 'intersection-observer' );
}

$( document ).ready( () => {
	//Require all components here.
	require( './components/foundation' );
	require( './components/header' );
	require( './components/animations' );

	document.body.className.replace( /-/g, '_' ).split( /\s+/ ).forEach( cls => {
		pageScripts[ cls ] && pageScripts[ cls ]();
	} );
} );

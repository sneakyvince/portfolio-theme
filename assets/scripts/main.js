import $           from 'jquery';
import pageScripts from './pages';

import 'what-input';

// Node modules
require( 'intersection-observer' );

// Add a .js class to <html> so that NoJS weirdo's dont get a blank site.
// const root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
// root.className += ' js';

$( document ).ready( function () {
	//Require all components here.
	require( './components/foundation' );
	require( './components/animations' );

	document.body.className.replace( /-/g, '_' ).split( /\s+/ ).forEach( cls => {
		pageScripts[ cls ] && pageScripts[ cls ]();
	} );
} );

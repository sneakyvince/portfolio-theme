import $ from 'jquery';

/**
 * All used foundation plugins are included here, so only used plugins are loaded.
 * Files can be found inside the "node_modules/foundation-sites/dist/js/plugins" directory.
 */
import 'foundation-sites/dist/js/plugins/foundation.core';
import 'foundation-sites/dist/js/plugins/foundation.smoothScroll';
import 'foundation-sites/dist/js/plugins/foundation.dropdownMenu';
import 'foundation-sites/dist/js/plugins/foundation.responsiveToggle';
import 'foundation-sites/dist/js/plugins/foundation.util.triggers';
import 'foundation-sites/dist/js/plugins/foundation.util.mediaQuery';
import 'foundation-sites/dist/js/plugins/foundation.sticky';
import 'foundation-sites/dist/js/plugins/foundation.magellan';

$( document ).foundation();

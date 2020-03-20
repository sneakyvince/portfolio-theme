(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./assets/scripts/pages/home.js":
/*!**************************************!*\
  !*** ./assets/scripts/pages/home.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollama */ "./node_modules/scrollama/build/scrollama.js");
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollama__WEBPACK_IMPORTED_MODULE_1__);
// You can put homepage specific javascript here


var tl = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline(); // Instantiate the scrollama

var scroller = scrollama__WEBPACK_IMPORTED_MODULE_1___default()(); // Setup the instance, pass callback functions
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

var item = document.querySelectorAll('.article.animate-gsap');
var observer = new IntersectionObserver(function (entries, self) {
  var targets = entries.map(function (entry) {
    if (entry.isIntersecting) {
      self.unobserve(entry.target);
      console.log(entry.target);
      return entry.target;
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(targets, {
    duration: 0.5,
    opacity: 1,
    stagger: {
      amount: 0.5
    }
  });
  console.log(targets);
});

for (var i = 0; i < item.length; i++) {
  observer.observe(item[i]);
} //
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9wYWdlcy9ob21lLmpzIl0sIm5hbWVzIjpbInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwic2Nyb2xsZXIiLCJzY3JvbGxhbWEiLCJpdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzZWxmIiwidGFyZ2V0cyIsIm1hcCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidG8iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiaSIsImxlbmd0aCIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MsNENBQUksQ0FBQ0MsUUFBTCxFQUFYLEMsQ0FFQTs7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLGdEQUFTLEVBQTFCLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEyQix1QkFBM0IsQ0FBWDtBQUVBLElBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUEwQixVQUFXQyxPQUFYLEVBQW9CQyxJQUFwQixFQUEyQjtBQUNuRSxNQUFJQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFhLFVBQUFDLEtBQUssRUFBSTtBQUNuQyxRQUFLQSxLQUFLLENBQUNDLGNBQVgsRUFBNEI7QUFDM0JKLFVBQUksQ0FBQ0ssU0FBTCxDQUFnQkYsS0FBSyxDQUFDRyxNQUF0QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBSyxDQUFDRyxNQUFsQjtBQUNBLGFBQU9ILEtBQUssQ0FBQ0csTUFBYjtBQUNBO0FBQ0QsR0FOYSxDQUFkO0FBUUFoQiw4Q0FBSSxDQUFDbUIsRUFBTCxDQUFTUixPQUFULEVBQWtCO0FBQ2pCUyxZQUFRLEVBQUcsR0FETTtBQUVqQkMsV0FBTyxFQUFJLENBRk07QUFHakJDLFdBQU8sRUFBSTtBQUNWQyxZQUFNLEVBQUc7QUFEQztBQUhNLEdBQWxCO0FBUUFOLFNBQU8sQ0FBQ0MsR0FBUixDQUFhUCxPQUFiO0FBQ0EsQ0FsQmMsQ0FBZjs7QUFvQkEsS0FBTSxJQUFJYSxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHcEIsSUFBSSxDQUFDcUIsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBd0M7QUFDdkNqQixVQUFRLENBQUNtQixPQUFULENBQWtCdEIsSUFBSSxDQUFFb0IsQ0FBRixDQUF0QjtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE8iLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFlvdSBjYW4gcHV0IGhvbWVwYWdlIHNwZWNpZmljIGphdmFzY3JpcHQgaGVyZVxuaW1wb3J0IGdzYXAgICAgICBmcm9tICdnc2FwJztcbmltcG9ydCBzY3JvbGxhbWEgZnJvbSAnc2Nyb2xsYW1hJztcblxuY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbi8vIEluc3RhbnRpYXRlIHRoZSBzY3JvbGxhbWFcbmNvbnN0IHNjcm9sbGVyID0gc2Nyb2xsYW1hKCk7XG5cbi8vIFNldHVwIHRoZSBpbnN0YW5jZSwgcGFzcyBjYWxsYmFjayBmdW5jdGlvbnNcbi8vIGxldCB0YXJnZXRzID0gW107XG4vL1xuLy8gc2Nyb2xsZXJcbi8vIFx0LnNldHVwKCB7XG4vLyBcdFx0ICAgICAgICBzdGVwICAgOiAnLmFydGljbGUuYW5pbWF0ZS1nc2FwJyxcbi8vIFx0XHQgICAgICAgIGRlYnVnICA6IHRydWUsXG4vLyBcdFx0ICAgICAgICBvbmNlICAgOiB0cnVlLFxuLy8gXHRcdCAgICAgICAgb2Zmc2V0IDogMSxcbi8vIFx0ICAgICAgICB9IClcbi8vIFx0Lm9uU3RlcEVudGVyKCAoIHJlc3BvbnNlICkgPT4ge1xuLy9cbi8vIFx0XHR0YXJnZXRzLnB1c2goIHJlc3BvbnNlLmVsZW1lbnQgKTtcbi8vXG4vLyBcdFx0Y29uc29sZS5sb2coIHRhcmdldHMgKTtcbi8vIFx0fSApO1xuLy9cbi8vXG4vLyAvLyBTZXR1cCByZXNpemUgZXZlbnRcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgc2Nyb2xsZXIucmVzaXplICk7XG5cblxubGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmFydGljbGUuYW5pbWF0ZS1nc2FwJyApO1xuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoIGZ1bmN0aW9uICggZW50cmllcywgc2VsZiApIHtcblx0bGV0IHRhcmdldHMgPSBlbnRyaWVzLm1hcCggZW50cnkgPT4ge1xuXHRcdGlmICggZW50cnkuaXNJbnRlcnNlY3RpbmcgKSB7XG5cdFx0XHRzZWxmLnVub2JzZXJ2ZSggZW50cnkudGFyZ2V0ICk7XG5cdFx0XHRjb25zb2xlLmxvZyhlbnRyeS50YXJnZXQpXG5cdFx0XHRyZXR1cm4gZW50cnkudGFyZ2V0O1xuXHRcdH1cblx0fSApO1xuXG5cdGdzYXAudG8oIHRhcmdldHMsIHtcblx0XHRkdXJhdGlvbiA6IDAuNSxcblx0XHRvcGFjaXR5ICA6IDEsXG5cdFx0c3RhZ2dlciAgOiB7XG5cdFx0XHRhbW91bnQgOiAwLjUsXG5cdFx0fSxcblx0fSApO1xuXG5cdGNvbnNvbGUubG9nKCB0YXJnZXRzICk7XG59ICk7XG5cbmZvciAoIHZhciBpID0gMDsgaSA8IGl0ZW0ubGVuZ3RoOyBpKysgKSB7XG5cdG9ic2VydmVyLm9ic2VydmUoIGl0ZW1bIGkgXSApO1xufVxuXG4vL1xuLy8gZ3NhcC50byh0YXJnZXRzLCB7XG4vLyBcdG9wYWNpdHk6IDEsXG4vLyBcdHN0YWdnZXI6IDAuMixcbi8vIH0pO1xuXG4vLyB0bC50byggZWxlbWVudCwge1xuLy8gXHQgIGR1cmF0aW9uICA6IDAuNSxcbi8vIFx0ICBhdXRvQWxwaGEgOiAwLFxuLy8gXHQgIHN0YWdnZXIgICA6IHtcbi8vIFx0XHQgIGFtb3VudCA6IDEuNSxcbi8vIFx0ICB9LFxuLy8gXHQgIC8vIGNsZWFyUHJvcHMgOiAnYWxsJywgLy8gQ2xlYXIgb3BhY2l0eSBzbyB0aGUgaG92ZXIgYW5pbWF0aW9uIHN0YXlzIHdvcmtpbmcuXG4vLyAgIH0sICdkb3R0ZWQtbGluZXMnIClcbi8vXG4vLyAgIC5mcm9tKCBlbGVtZW50LCB7XG4vLyBcdCAgICAgICAgIC8vIGRlbGF5ICAgICA6IDUsXG4vLyBcdCAgICAgICAgIGR1cmF0aW9uICA6IDAuNSxcbi8vIFx0ICAgICAgICAgYXV0b0FscGhhIDogMCxcbi8vIFx0ICAgICAgICAgc3RhZ2dlciAgIDoge1xuLy8gXHRcdCAgICAgICAgIGFtb3VudCA6IDFcbi8vIFx0ICAgICAgICAgfSxcbi8vICAgICAgICAgIH0sICdkb3R0ZWQtbGluZXMrPTAuMjUnXG4vLyAgICk7XG4iXSwic291cmNlUm9vdCI6IiJ9
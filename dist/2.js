(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/scripts/pages/home.js":
/*!**************************************!*\
  !*** ./assets/scripts/pages/home.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
// You can put homepage specific javascript here

var tl = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
tl.to('.item__dotted-lines.animate-gsap', {
  duration: 0.5,
  autoAlpha: 0,
  stagger: {
    amount: 1.5
  } // clearProps : 'all', // Clear opacity so the hover animation stays working.

}, 'dotted-lines').from('.article.animate-gsap', {
  // delay     : 5,
  duration: 0.5,
  autoAlpha: 0,
  stagger: {
    amount: 1
  }
}, 'dotted-lines+=0.25');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9wYWdlcy9ob21lLmpzIl0sIm5hbWVzIjpbInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwidG8iLCJkdXJhdGlvbiIsImF1dG9BbHBoYSIsInN0YWdnZXIiLCJhbW91bnQiLCJmcm9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxFQUFFLEdBQUdDLDRDQUFJLENBQUNDLFFBQUwsRUFBVDtBQUNBRixFQUFFLENBQUNHLEVBQUgsQ0FBTyxrQ0FBUCxFQUEyQztBQUN4Q0MsVUFBUSxFQUFJLEdBRDRCO0FBRXhDQyxXQUFTLEVBQUcsQ0FGNEI7QUFHeENDLFNBQU8sRUFBSztBQUNYQyxVQUFNLEVBQUc7QUFERSxHQUg0QixDQU14Qzs7QUFOd0MsQ0FBM0MsRUFPSyxjQVBMLEVBUUdDLElBUkgsQ0FRUyx1QkFSVCxFQVFrQztBQUN4QjtBQUNBSixVQUFRLEVBQUksR0FGWTtBQUd4QkMsV0FBUyxFQUFHLENBSFk7QUFJeEJDLFNBQU8sRUFBSztBQUNYQyxVQUFNLEVBQUc7QUFERTtBQUpZLENBUmxDLEVBZVksb0JBZlosRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gWW91IGNhbiBwdXQgaG9tZXBhZ2Ugc3BlY2lmaWMgamF2YXNjcmlwdCBoZXJlXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxubGV0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xudGwudG8oICcuaXRlbV9fZG90dGVkLWxpbmVzLmFuaW1hdGUtZ3NhcCcsIHtcblx0ICBkdXJhdGlvbiAgOiAwLjUsXG5cdCAgYXV0b0FscGhhIDogMCxcblx0ICBzdGFnZ2VyICAgOiB7XG5cdFx0ICBhbW91bnQgOiAxLjUsXG5cdCAgfSxcblx0ICAvLyBjbGVhclByb3BzIDogJ2FsbCcsIC8vIENsZWFyIG9wYWNpdHkgc28gdGhlIGhvdmVyIGFuaW1hdGlvbiBzdGF5cyB3b3JraW5nLlxuICB9LCAnZG90dGVkLWxpbmVzJyApXG4gIC5mcm9tKCAnLmFydGljbGUuYW5pbWF0ZS1nc2FwJywge1xuXHQgICAgICAgICAvLyBkZWxheSAgICAgOiA1LFxuXHQgICAgICAgICBkdXJhdGlvbiAgOiAwLjUsXG5cdCAgICAgICAgIGF1dG9BbHBoYSA6IDAsXG5cdCAgICAgICAgIHN0YWdnZXIgICA6IHtcblx0XHQgICAgICAgICBhbW91bnQgOiAxXG5cdCAgICAgICAgIH0sXG4gICAgICAgICB9LCAnZG90dGVkLWxpbmVzKz0wLjI1J1xuICApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
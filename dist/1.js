(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/scripts/pages/single.js":
/*!****************************************!*\
  !*** ./assets/scripts/pages/single.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollama */ "./node_modules/scrollama/build/scrollama.js");
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollama__WEBPACK_IMPORTED_MODULE_1__);

 // let elements = document.query

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    // If the element is in view, do animation
    if (entry.intersectionRatio > 0) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from(entry.target, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        clearProps: 'all'
      });
      observer.unobserve(entry.target);
    }
  });
});
var article = document.getElementById('entry-content');
var elements = article.children.classList.add(' foo');
console.log(elements);

if (elements) {
  // Add an intersection observer to each element
  elements.forEach(function (element) {
    observer.observe(element);
  });
}

observe(test, function (x) {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from(entry.target, {
    opacity: 0,
    y: 25,
    duration: 0.5,
    clearProps: 'all'
  });
});

function observe(tes, callback) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9wYWdlcy9zaW5nbGUuanMiXSwibmFtZXMiOlsib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImdzYXAiLCJmcm9tIiwidGFyZ2V0Iiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsImNsZWFyUHJvcHMiLCJ1bm9ic2VydmUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1lbnRzIiwiY2hpbGRyZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsIm9ic2VydmUiLCJ0ZXN0IiwieCIsInRlcyIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUEwQixVQUFFQyxPQUFGLEVBQWU7QUFHekRBLFNBQU8sQ0FBQ0MsT0FBUixDQUFpQixVQUFBQyxLQUFLLEVBQUk7QUFFekI7QUFDQSxRQUFLQSxLQUFLLENBQUNDLGlCQUFOLEdBQTBCLENBQS9CLEVBQW1DO0FBQ2xDQyxrREFBSSxDQUFDQyxJQUFMLENBQVdILEtBQUssQ0FBQ0ksTUFBakIsRUFBeUI7QUFDeEJDLGVBQU8sRUFBTSxDQURXO0FBRXhCQyxTQUFDLEVBQVksRUFGVztBQUd4QkMsZ0JBQVEsRUFBSyxHQUhXO0FBSXhCQyxrQkFBVSxFQUFHO0FBSlcsT0FBekI7QUFNQVosY0FBUSxDQUFDYSxTQUFULENBQW9CVCxLQUFLLENBQUNJLE1BQTFCO0FBQ0E7QUFDRCxHQVpEO0FBYUEsQ0FoQmdCLENBQWpCO0FBbUJBLElBQUlNLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQWQ7QUFDQSxJQUFJQyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkMsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLE1BQS9CLENBQWY7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVo7O0FBRUEsSUFBS0EsUUFBTCxFQUFnQjtBQUNmO0FBQ0FBLFVBQVEsQ0FBQ2QsT0FBVCxDQUFrQixVQUFBb0IsT0FBTyxFQUFJO0FBQzVCdkIsWUFBUSxDQUFDd0IsT0FBVCxDQUFrQkQsT0FBbEI7QUFDQSxHQUZEO0FBR0E7O0FBRURDLE9BQU8sQ0FBRUMsSUFBRixFQUFRLFVBQVNDLENBQVQsRUFBWTtBQUMxQnBCLDhDQUFJLENBQUNDLElBQUwsQ0FBV0gsS0FBSyxDQUFDSSxNQUFqQixFQUF5QjtBQUN4QkMsV0FBTyxFQUFNLENBRFc7QUFFeEJDLEtBQUMsRUFBWSxFQUZXO0FBR3hCQyxZQUFRLEVBQUssR0FIVztBQUl4QkMsY0FBVSxFQUFHO0FBSlcsR0FBekI7QUFNQSxDQVBNLENBQVA7O0FBU0EsU0FBU1ksT0FBVCxDQUFrQkcsR0FBbEIsRUFBdUJDLFFBQXZCLEVBQWtDLENBRWpDLEMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgc2Nyb2xsYW1hIGZyb20gJ3Njcm9sbGFtYSc7XG4vLyBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVxuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlciggKCBlbnRyaWVzICkgPT4ge1xuXG5cblx0ZW50cmllcy5mb3JFYWNoKCBlbnRyeSA9PiB7XG5cblx0XHQvLyBJZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3LCBkbyBhbmltYXRpb25cblx0XHRpZiAoIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCApIHtcblx0XHRcdGdzYXAuZnJvbSggZW50cnkudGFyZ2V0LCB7XG5cdFx0XHRcdG9wYWNpdHkgICAgOiAwLFxuXHRcdFx0XHR5ICAgICAgICAgIDogMjUsXG5cdFx0XHRcdGR1cmF0aW9uICAgOiAwLjUsXG5cdFx0XHRcdGNsZWFyUHJvcHMgOiAnYWxsJyxcblx0XHRcdH0gKTtcblx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZSggZW50cnkudGFyZ2V0ICk7XG5cdFx0fVxuXHR9IClcbn0gKTtcblxuXG5sZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeS1jb250ZW50Jyk7XG5sZXQgZWxlbWVudHMgPSBhcnRpY2xlLmNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoJyBmb28nKTtcblxuY29uc29sZS5sb2coZWxlbWVudHMpO1xuXG5pZiAoIGVsZW1lbnRzICkge1xuXHQvLyBBZGQgYW4gaW50ZXJzZWN0aW9uIG9ic2VydmVyIHRvIGVhY2ggZWxlbWVudFxuXHRlbGVtZW50cy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcblx0XHRvYnNlcnZlci5vYnNlcnZlKCBlbGVtZW50IClcblx0fSApO1xufVxuXG5vYnNlcnZlKCB0ZXN0LCBmdW5jdGlvbih4KSB7XG5cdGdzYXAuZnJvbSggZW50cnkudGFyZ2V0LCB7XG5cdFx0b3BhY2l0eSAgICA6IDAsXG5cdFx0eSAgICAgICAgICA6IDI1LFxuXHRcdGR1cmF0aW9uICAgOiAwLjUsXG5cdFx0Y2xlYXJQcm9wcyA6ICdhbGwnLFxuXHR9ICk7XG59ICk7XG5cbmZ1bmN0aW9uIG9ic2VydmUoIHRlcywgY2FsbGJhY2sgKSB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
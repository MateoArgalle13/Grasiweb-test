/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initHeader: () => (/* binding */ initHeader)\n/* harmony export */ });\n/**\r\n * Módulo Header\r\n * Controla el comportamiento sticky y el scroll suave a secciones\r\n */\n\nvar initHeader = function initHeader() {\n  var header = document.querySelector('.header');\n\n  // Enlaces de navegación dentro del header\n  var linkProducts = document.querySelector('.header__link[href=\"#featured-products\"]');\n  var linkCollections = document.querySelector('.header__link[href=\"#collections\"]');\n\n  /**\r\n   * Sticky Header\r\n   * Al hacer scroll, se agrega una clase para aplicar transparencia y efecto sticky\r\n   */\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > 50) {\n      header.classList.add('header--sticky');\n    } else {\n      header.classList.remove('header--sticky');\n    }\n  });\n\n  /**\r\n   * Scroll Suave\r\n   * Realiza scroll animado a la sección especificada\r\n   * @param {string} selector - ID del elemento al que se desea hacer scroll\r\n   */\n  var smoothScroll = function smoothScroll(selector) {\n    var section = document.querySelector(selector);\n    if (section) {\n      section.scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  };\n\n  // Listeners para scroll suave\n  linkProducts === null || linkProducts === void 0 || linkProducts.addEventListener('click', function (e) {\n    e.preventDefault();\n    smoothScroll('#featured-products');\n  });\n  linkCollections === null || linkCollections === void 0 || linkCollections.addEventListener('click', function (e) {\n    e.preventDefault();\n    smoothScroll('#collections');\n  });\n};\n\n//# sourceURL=webpack://shopify-simulator/./components/header/header.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.js\");\nconsole.log('Gradiweb is online!!!');\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_components_header_header__WEBPACK_IMPORTED_MODULE_0__.initHeader)();\n});\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
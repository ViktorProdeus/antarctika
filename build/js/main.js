/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/polyfill-foreach */ \"./js/utils/polyfill-foreach.js\");\n/* harmony import */ var _utils_init_ie11_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/init-ie11-download */ \"./js/utils/init-ie11-download.js\");\n/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/menu */ \"./js/main/menu.js\");\n/* harmony import */ var _main_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/validate */ \"./js/main/validate.js\");\n\n // Utils\n// ---------------------------------\n\nObject(_utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_0__[\"forEachPolyfill\"])();\nObject(_utils_init_ie11_download__WEBPACK_IMPORTED_MODULE_1__[\"initIe11Download\"])(); // Modules\n// ---------------------------------\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/main/menu.js":
/*!*************************!*\
  !*** ./js/main/menu.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar menu = function menu() {\n  var isClassNoJs = document.querySelector(\".main-header--no-js\");\n  var siteNavigation = document.querySelector(\".main-header__nav\");\n  var buttonMenu = document.querySelector(\".main-header__burger\");\n\n  if (isClassNoJs) {\n    buttonMenu.classList.add(\"main-header__burger--close\");\n    isClassNoJs.classList.remove(\"main-header--no-js\");\n    siteNavigation.classList.add(\"main-header__nav--close\");\n  }\n\n  buttonMenu.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    buttonMenu.classList.toggle(\"main-header__burger--close\");\n    siteNavigation.classList.toggle(\"main-header__nav--close\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu());\n\n//# sourceURL=webpack:///./js/main/menu.js?");

/***/ }),

/***/ "./js/main/validate.js":
/*!*****************************!*\
  !*** ./js/main/validate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar validate = function validate() {\n  var form = document.querySelector(\".feedback__order form\");\n  var fields = form.querySelectorAll(\".feedback__field input\");\n  var checkbox = form.querySelector(\".feedback__checkbox input\");\n\n  var setErrorFor = function setErrorFor(input) {\n    var formControl = input;\n    formControl.classList.add(\"feedback__error\");\n  };\n\n  var setSuccessFor = function setSuccessFor(input) {\n    var formControl = input;\n    formControl.classList.remove(\"feedback__error\");\n  };\n\n  fields.forEach(function (element) {\n    element.addEventListener(\"input\", function () {\n      setSuccessFor(element);\n    });\n  });\n  checkbox.addEventListener(\"input\", function () {\n    if (checkbox.checked) {\n      checkbox.parentNode.classList.remove(\"feedback__checkbox--error\");\n    }\n  });\n  form.addEventListener(\"submit\", function (evt) {\n    evt.preventDefault();\n    var succesFields = 0;\n    fields.forEach(function (element) {\n      if (!element.value) {\n        setErrorFor(element);\n      } else {\n        setSuccessFor(element);\n        succesFields++;\n      }\n    });\n\n    if (!checkbox.checked) {\n      checkbox.parentNode.classList.add(\"feedback__checkbox--error\");\n      succesFields--;\n    } else {\n      checkbox.parentNode.classList.remove(\"feedback__checkbox--error\");\n      succesFields++;\n    }\n\n    if (succesFields === 4) {\n      setTimeout(function () {\n        form.reset();\n      }, 600);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate());\n\n//# sourceURL=webpack:///./js/main/validate.js?");

/***/ }),

/***/ "./js/utils/init-ie11-download.js":
/*!****************************************!*\
  !*** ./js/utils/init-ie11-download.js ***!
  \****************************************/
/*! exports provided: initIe11Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initIe11Download\", function() { return initIe11Download; });\nvar ie11Download = function ie11Download(el) {\n  if (el.href === \"\") {\n    throw Error(\"The element has no href value.\");\n  }\n\n  var filename = el.getAttribute(\"download\");\n\n  if (filename === null || filename === \"\") {\n    var tmp = el.href.split(\"/\");\n    filename = tmp[tmp.length - 1];\n  }\n\n  el.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    var xhr = new XMLHttpRequest();\n\n    xhr.onloadstart = function () {\n      xhr.responseType = \"blob\";\n    };\n\n    xhr.onload = function () {\n      navigator.msSaveOrOpenBlob(xhr.response, filename);\n    };\n\n    xhr.open(\"GET\", el.href, true);\n    xhr.send();\n  });\n};\n\nvar downloadLinks = document.querySelectorAll(\"a[download]\");\n\nvar initIe11Download = function initIe11Download() {\n  if (window.navigator.msSaveBlob) {\n    if (downloadLinks.length) {\n      downloadLinks.forEach(function (el) {\n        ie11Download(el);\n      });\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/init-ie11-download.js?");

/***/ }),

/***/ "./js/utils/polyfill-foreach.js":
/*!**************************************!*\
  !*** ./js/utils/polyfill-foreach.js ***!
  \**************************************/
/*! exports provided: forEachPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEachPolyfill\", function() { return forEachPolyfill; });\nvar forEachPolyfill = function forEachPolyfill() {\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/polyfill-foreach.js?");

/***/ })

/******/ });
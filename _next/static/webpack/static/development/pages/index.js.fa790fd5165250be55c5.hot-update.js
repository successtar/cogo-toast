webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/Promise/index.jsx":
/*!*******************************************!*\
  !*** ./components/Home/Promise/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cogo-toast */ "../dist/index.es.js");
/* harmony import */ var _common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/paragraph */ "./common-util/paragraph/index.jsx");
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_code_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common-util/code-block */ "./common-util/code-block/index.jsx");
/* harmony import */ var _common_util_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common-util/button */ "./common-util/button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/Promise/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Promise/index.jsx";








var showToast = function showToast() {
  cogo_toast__WEBPACK_IMPORTED_MODULE_1__["default"].loading('Loading your data...').then(function () {
    cogo_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success('Data Successfully Loaded');
  });
};

var code = "cogoToast.loading('Loading your data...').then(() => {\n  cogoToast.success('Data Successfully Loaded');\n});";

var Types = function Types() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: "Returns a Promise, With Useful Callbacks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Returns a promise which resolves when the toast is about to hide."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "This can be useful to do some action when the toast has completed showing.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Group"], {
    className: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, code), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "primary",
    onClick: showToast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Show Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "When hideAfter = 0, It returns a callback function that hides the toast, instead of a promise."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ })

})
//# sourceMappingURL=index.js.fa790fd5165250be55c5.hot-update.js.map
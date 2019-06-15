webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/Types/index.jsx":
/*!*****************************************!*\
  !*** ./components/Home/Types/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cogo-toast */ "../dist/index.es.js");
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/button */ "./common-util/button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Types/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Types/index.jsx";





var types = ['success', 'info', 'loading', 'warn', 'error'];

var showMessage = function showMessage(type) {
  return cogo_toast__WEBPACK_IMPORTED_MODULE_1__["default"][type]("This is a ".concat(type, " message."), {
    onClick: function onClick(hide) {
      hide();
    }
  });
};

var showAll = function showAll() {
  return types.forEach(function (type) {
    return showMessage(type);
  });
};

var codeBlock = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"].Block, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, types.map(function (type) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "code_".concat(type),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "cogoToast.", type, "('This is a ", type, " message');");
}));

var Types = function Types() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "5 Built in Types",
    code: codeBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, types.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: type,
      className: type,
      onClick: function onClick() {
        return showMessage(type);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, type);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "primary",
    onClick: showAll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Show All"));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ })

})
//# sourceMappingURL=index.js.2749a8f60388a2200d09.hot-update.js.map
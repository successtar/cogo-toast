webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common-util/code-block/index.jsx":
/*!******************************************!*\
  !*** ./common-util/code-block/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/es/index.js");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer/themes/vsDark */ "./node_modules/prism-react-renderer/themes/vsDark.js");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prism_react_renderer_themes_ultramin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prism-react-renderer/themes/ultramin */ "./node_modules/prism-react-renderer/themes/ultramin.js");
/* harmony import */ var prism_react_renderer_themes_ultramin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_ultramin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prism_react_renderer_themes_shadesOfPurple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prism-react-renderer/themes/shadesOfPurple */ "./node_modules/prism-react-renderer/themes/shadesOfPurple.js");
/* harmony import */ var prism_react_renderer_themes_shadesOfPurple__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_shadesOfPurple__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prism-react-renderer/themes/oceanicNext */ "./node_modules/prism-react-renderer/themes/oceanicNext.js");
/* harmony import */ var prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prism-react-renderer/themes/nightOwl */ "./node_modules/prism-react-renderer/themes/nightOwl.js");
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prism-react-renderer/themes/duotoneLight */ "./node_modules/prism-react-renderer/themes/duotoneLight.js");
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prism-react-renderer/themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark.js");
/* harmony import */ var prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prism-react-renderer/themes/dracula */ "./node_modules/prism-react-renderer/themes/dracula.js");
/* harmony import */ var prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/common-util/code-block/index.jsx";












var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children,
      langClass = _ref.className,
      theme = _ref.theme;
  var themes = {
    darkPlus: prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_5___default.a,
    dark: prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_5___default.a,
    ultraMin: prism_react_renderer_themes_ultramin__WEBPACK_IMPORTED_MODULE_6___default.a,
    shadesOfPurple: prism_react_renderer_themes_shadesOfPurple__WEBPACK_IMPORTED_MODULE_7___default.a,
    oceanicNext: prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_8___default.a,
    nightOwl: prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_9___default.a,
    duotoneLight: prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_10___default.a,
    duotoneDark: prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_11___default.a,
    dracula: prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_12___default.a
  };
  var language = langClass.replace(/language-/, '');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["defaultProps"], {
    code: children,
    language: language,
    theme: themes[theme],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
      className: className,
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style, {
        padding: '16px 24px',
        borderRadius: 8,
        lineHeight: 2,
        margin: '15px 5px',
        overflow: 'auto'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, tokens.map(function (line, i) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: "line_".concat(i)
      }, getLineProps({
        line: line,
        key: i
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), line.map(function (token, key) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: "token_".concat(key)
        }, getTokenProps({
          token: token,
          key: key
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));
      }));
    }));
  });
};

CodeBlock.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
};
CodeBlock.defaultProps = {
  className: 'javascript',
  theme: 'dark'
};
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

/***/ })

})
//# sourceMappingURL=index.js.1fb93f6c645bc42684d7.hot-update.js.map
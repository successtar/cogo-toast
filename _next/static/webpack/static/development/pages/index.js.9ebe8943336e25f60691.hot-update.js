webpackHotUpdate("static/development/pages/index.js",{

/***/ "../dist/index.es.js":
/*!***************************!*\
  !*** ../dist/index.es.js ***!
  \***************************/
/*! exports provided: default, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/registry.npmjs.org/react/16.12.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/.pnpm/registry.npmjs.org/react-dom/16.12.0_react@16.12.0/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/.pnpm/registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var success = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({ viewBox: "0 0 426.667 426.667", width: 18, height: 18 }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z", fill: "#6ac259" }))); };
var warn = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({ viewBox: "0 0 310.285 310.285", width: 18, height: 18 }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z", fill: "#FFDA44" }))); };
var loading = function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", __assign({ className: "ct-icon-loading" }, props)); };
var info = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({ viewBox: "0 0 23.625 23.625", width: 18, height: 18 }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z", fill: "#006DF0" }))); };
var error = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({ viewBox: "0 0 51.976 51.976", width: 18, height: 18 }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z", fill: "#D80027" }))); };
var Icons = {
    success: success,
    warn: warn,
    loading: loading,
    info: info,
    error: error,
};
//# sourceMappingURL=Icons.js.map

var colors = {
    success: '#6EC05F',
    info: '#1271EC',
    warn: '#FED953',
    error: '#D60A2E',
    loading: '#0088ff',
};
var Toast = function (props) {
    var _a;
    var _b, _c, _d;
    var place = (props.position || 'top-center').includes('bottom') ? 'Bottom' : 'Top';
    var marginType = "margin" + place;
    var className = [
        'ct-toast',
        props.onClick ? ' ct-cursor-pointer' : '',
        "ct-toast-" + props.type,
    ].join(' ');
    var borderLeft = (((_b = props.bar) === null || _b === void 0 ? void 0 : _b.size) || '3px') + " " + (((_c = props.bar) === null || _c === void 0 ? void 0 : _c.style) || 'solid') + " " + (((_d = props.bar) === null || _d === void 0 ? void 0 : _d.color) || colors[props.type]);
    var CurrentIcon = Icons[props.type];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_a = { opacity: 0 }, _a[marginType] = -15, _a)), animStyles = _e[0], setAnimStyles = _e[1];
    var style = __assign({ paddingLeft: props.heading ? 25 : undefined, minHeight: props.heading ? 50 : undefined, borderLeft: borderLeft }, animStyles);
    var handleHide = function () {
        var _a;
        setAnimStyles((_a = { opacity: 0 }, _a[marginType] = '-15px', _a));
        setTimeout(function () {
            props.onHide(props.id, props.position);
        }, 300);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setTimeout(function () {
            var _a;
            setAnimStyles((_a = { opacity: 1 }, _a[marginType] = '15px', _a));
        }, 50);
        if (props.hideAfter !== 0) {
            setTimeout(function () {
                handleHide();
            }, props.hideAfter * 1000);
        }
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!props.show) {
            handleHide();
        }
    }, [props.show]);
    var clickProps = {
        tabIndex: 0,
        onClick: props.onClick,
        onKeyPress: function (e) {
            if (e.keyCode === 13) {
                props.onClick(e);
            }
        },
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", __assign({ className: className, role: props.role ? props.role : 'status', style: style }, (props.onClick ? clickProps : {})),
        props.renderIcon ? props.renderIcon() : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentIcon, null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: props.heading ? 'ct-text-group-heading' : 'ct-text-group' },
            props.heading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "ct-heading" }, props.heading),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ct-text" }, props.text))));
};
Toast.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
    text: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]]).isRequired,
    show: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
    onHide: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    id: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]]),
    hideAfter: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
    heading: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    position: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    renderIcon: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    bar: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({}),
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    role: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
};
Toast.defaultProps = {
    id: undefined,
    show: true,
    onHide: undefined,
    hideAfter: 3,
    heading: undefined,
    position: 'top-center',
    renderIcon: undefined,
    bar: {},
    onClick: undefined,
    role: 'status',
};
//# sourceMappingURL=Toast.js.map

var camelCase = function (str) { return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }); };
var defaultToasts = {
    topLeft: [],
    topCenter: [],
    topRight: [],
    bottomLeft: [],
    bottomCenter: [],
    bottomRight: [],
};
var ToastContainer = function (_a) {
    var toast = _a.toast, hiddenID = _a.hiddenID;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultToasts), allToasts = _b[0], setToasts = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (toast) {
            setToasts(function (prevToasts) {
                var _a;
                var position = camelCase(toast.position || 'top-center');
                return __assign(__assign({}, prevToasts), (_a = {}, _a[position] = __spreadArrays(prevToasts[position], [toast]), _a));
            });
        }
    }, [toast]);
    var handleRemove = function (id, position) {
        setToasts(function (prevToasts) {
            var _a;
            var toastPosition = camelCase(position || 'top-center');
            return __assign(__assign({}, prevToasts), (_a = {}, _a[toastPosition] = prevToasts[toastPosition].filter(function (item) { return item.id !== id; }), _a));
        });
    };
    var rows = ['top', 'bottom'];
    var groups = ['Left', 'Center', 'Right'];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rows.map(function (row) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: "row_" + row, className: "ct-row" }, groups.map(function (group) {
        var type = "" + row + group;
        var className = ['ct-group', row === 'bottom' ? 'ct-flex-bottom' : ''].join(' ');
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: type, className: className }, allToasts[type].map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toast, __assign({ key: type + "_" + item.id }, item, { id: item.id, text: item.text, type: item.type, onClick: item.onClick, hideAfter: item.hideAfter, show: hiddenID !== item.id, onHide: handleRemove }))); })));
    }))); })));
};
ToastContainer.propTypes = {
    toast: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({}),
    hiddenID: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
};
ToastContainer.defaultProps = {
    toast: undefined,
    hiddenID: undefined,
};
//# sourceMappingURL=ToastContainer.js.map

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "#ct-container {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100vh;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 2000;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpointer-events: none;\n}\n\n.ct-row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.ct-group {\n\tflex: 1;\n\tmargin: 10px 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.ct-group:first-child {\n\talign-items: flex-start;\n}\n\n.ct-group:last-child {\n\talign-items: flex-end;\n}\n\n.ct-flex-bottom {\n\tjustify-content: flex-end;\n}\n\n.ct-toast {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 12px 20px;\n\tbackground-color: #fff;\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n\tcolor: #000;\n\tborder-radius: 4px;\n\tmargin: 0px;\n\topacity: 1;\n\ttransition: 0.3s all ease-in-out;\n\tmin-height: 45px;\n\tpointer-events: all;\n}\n\n.ct-toast:focus {\n\toutline: none;\n}\n\n.ct-toast svg {\n\tmin-width: 18px;\n}\n\n.ct-cursor-pointer {\n\tcursor: pointer;\n}\n\n.ct-icon-loading {\n\tdisplay: inline-block;\n\twidth: 20px;\n\theight: 20px;\n}\n\n.ct-icon-loading:after {\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 14px;\n\theight: 14px;\n\tmargin: 1px;\n\tborder-radius: 50%;\n\tborder: 2px solid #0088ff;\n\tborder-color: #0088ff transparent #0088ff transparent;\n\tanimation: ct-icon-loading 1.2s linear infinite;\n}\n\n@keyframes ct-icon-loading {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.ct-text-group {\n\tmargin-left: 15px;\n}\n\n.ct-text-group-heading {\n\tmargin-left: 25px;\n}\n\n.ct-heading {\n\tfont-size: 18px;\n\tmargin: 0px;\n\tmargin-bottom: 5px;\n}\n\n.ct-text {\n\tfont-size: 14px;\n}\n\n@media (max-width: 768px) {\n\t.ct-row {\n\t\tjustify-content: flex-start;\n\t\tflex-direction: column;\n\t\tmargin: 7px 0px;\n\t}\n\n\t.ct-group {\n\t\tflex: none;\n\t\tmargin: 0px;\n\t}\n\n\t.ct-toast {\n\t\tmargin: 8px 15px;\n\t\twidth: initial;\n\t}\n}\n";
styleInject(css);

var ctToastCount = 0;
var cogoToast = function (text, options) {
    var _a, _b;
    var rootContainer = document.getElementById(((_a = options) === null || _a === void 0 ? void 0 : _a.toastContainerID) || 'ct-container');
    if (!rootContainer) {
        rootContainer = document.createElement('div');
        rootContainer.id = 'ct-container';
        document.body.appendChild(rootContainer);
    }
    ctToastCount += 1;
    var hideTime = (((_b = options) === null || _b === void 0 ? void 0 : _b.hideAfter) === undefined ? 3 : options.hideAfter) * 1000;
    var toast = __assign({ id: ctToastCount, text: text }, options);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToastContainer, { toast: toast }), rootContainer);
    var hide = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToastContainer, { hiddenID: toast.id }), rootContainer);
    };
    var completePromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, hideTime);
    });
    completePromise.hide = hide;
    return completePromise;
};
cogoToast.success = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'success' })); };
cogoToast.warn = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'warn' })); };
cogoToast.info = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'info' })); };
cogoToast.error = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'error' })); };
cogoToast.loading = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'loading' })); };
//# sourceMappingURL=index.js.map

/* harmony default export */ __webpack_exports__["default"] = (cogoToast);



/***/ })

})
//# sourceMappingURL=index.js.9ebe8943336e25f60691.hot-update.js.map
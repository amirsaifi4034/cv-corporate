"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/hero_section/HeroCard.jsx":
/*!**********************************************!*\
  !*** ./components/hero_section/HeroCard.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroCard\": function() { return /* binding */ HeroCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar HeroCard = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.herocardmain.map(function(herocard) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4 py-sm-5 rounded shadow text-white \".concat(herocard.extra_class),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex align-items-center justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: herocard.herocard_icon,\n                            alt: \"university\",\n                            width: \"50px\",\n                            height: \"50px\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Desktop/cv-corporate/components/hero_section/HeroCard.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ms-2 ms-md-3\",\n                            style: {\n                                lineHeight: \"15px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-0\",\n                                    children: herocard.herocard_rank\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/cv-corporate/components/hero_section/HeroCard.jsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-0 fw-bold\",\n                                    children: [\n                                        \" \",\n                                        herocard.herocard_title,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/user/Desktop/cv-corporate/components/hero_section/HeroCard.jsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/cv-corporate/components/hero_section/HeroCard.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/user/Desktop/cv-corporate/components/hero_section/HeroCard.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this1)\n            }, herocard, false, {\n                fileName: \"/home/user/Desktop/cv-corporate/components/hero_section/HeroCard.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, _this1);\n        })\n    }, void 0, false);\n};\n_c = HeroCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroCard);\nvar _c;\n$RefreshReg$(_c, \"HeroCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm9fc2VjdGlvbi9IZXJvQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFBK0I7QUFFeEIsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFFakMscUJBQ0U7a0JBQ0NBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLFFBQVE7aUNBRWhDLDhEQUFDQyxLQUFHO2dCQUFnQkMsU0FBUyxFQUFFLHlDQUF3QyxDQUF1QixPQUFyQkYsUUFBUSxDQUFDRyxXQUFXLENBQUU7MEJBQzNGLDRFQUFDRixLQUFHO29CQUFDQyxTQUFTLEVBQUMsa0RBQWtEOztzQ0FDN0QsOERBQUNQLG1EQUFLOzRCQUFDUyxHQUFHLEVBQUVKLFFBQVEsQ0FBQ0ssYUFBYTs0QkFBRUMsR0FBRyxFQUFDLFlBQVk7NEJBQUNDLEtBQUssRUFBQyxNQUFNOzRCQUFDQyxNQUFNLEVBQUMsTUFBTTs7Ozs7a0NBQVM7c0NBQzFGLDhEQUFDUCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsY0FBYzs0QkFBQ08sS0FBSyxFQUFFO2dDQUFDQyxVQUFVLEVBQUUsTUFBTTs2QkFBQzs7OENBQ3ZELDhEQUFDQyxJQUFFO29DQUFDVCxTQUFTLEVBQUMsTUFBTTs4Q0FBRUYsUUFBUSxDQUFDWSxhQUFhOzs7OzswQ0FBTTs4Q0FDbEQsOERBQUNDLEdBQUM7b0NBQUNYLFNBQVMsRUFBQyxjQUFjOzt3Q0FBQyxHQUFDO3dDQUFDRixRQUFRLENBQUNjLGNBQWM7d0NBQUMsR0FBQzs7Ozs7OzBDQUFJOzs7Ozs7a0NBQ3ZEOzs7Ozs7MEJBQ0Y7ZUFQQWQsUUFBUTs7OztzQkFRWjtTQUFBLENBRUw7cUJBRUUsQ0FDSjtDQUNGO0FBcEJZSixLQUFBQSxRQUFRO0FBc0JyQiwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm9fc2VjdGlvbi9IZXJvQ2FyZC5qc3g/ZmE4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgY29uc3QgSGVyb0NhcmQgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAge3Byb3BzLmhlcm9jYXJkbWFpbi5tYXAoaGVyb2NhcmQgPT4gXG5cbiAgICA8ZGl2IGtleT17aGVyb2NhcmR9IGNsYXNzTmFtZT17YHB5LTQgcHktc20tNSByb3VuZGVkIHNoYWRvdyB0ZXh0LXdoaXRlICR7aGVyb2NhcmQuZXh0cmFfY2xhc3N9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtoZXJvY2FyZC5oZXJvY2FyZF9pY29ufSBhbHQ9XCJ1bml2ZXJzaXR5XCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiPjwvSW1hZ2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy0yIG1zLW1kLTNcIiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMTVweFwifX0+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPntoZXJvY2FyZC5oZXJvY2FyZF9yYW5rfTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIGZ3LWJvbGRcIj4ge2hlcm9jYXJkLmhlcm9jYXJkX3RpdGxlfSA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgKX1cbiAgICBcbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2FyZCJdLCJuYW1lcyI6WyJJbWFnZSIsIkhlcm9DYXJkIiwicHJvcHMiLCJoZXJvY2FyZG1haW4iLCJtYXAiLCJoZXJvY2FyZCIsImRpdiIsImNsYXNzTmFtZSIsImV4dHJhX2NsYXNzIiwic3JjIiwiaGVyb2NhcmRfaWNvbiIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJsaW5lSGVpZ2h0IiwiaDUiLCJoZXJvY2FyZF9yYW5rIiwicCIsImhlcm9jYXJkX3RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero_section/HeroCard.jsx\n");

/***/ })

});
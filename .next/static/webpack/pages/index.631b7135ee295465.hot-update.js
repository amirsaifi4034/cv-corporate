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

/***/ "./components/media_presence/MediaPresence.jsx":
/*!*****************************************************!*\
  !*** ./components/media_presence/MediaPresence.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediaPresence\": function() { return /* binding */ MediaPresence; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _styles_MediaPresence_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/MediaPresence.module.scss */ \"./styles/MediaPresence.module.scss\");\n/* harmony import */ var _styles_MediaPresence_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_MediaPresence_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _MediaPresenceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaPresenceCard */ \"./components/media_presence/MediaPresenceCard.jsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar MediaPresence = function() {\n    var _this1 = _this;\n    var mediaPresenceCards = [\n        {\n            id: 0,\n            mediaLogo: \"/media_img/Hindustan.png\",\n            mediaContent: \"I wanted to create a platform that is free and\",\n            mediaImg: \"/media_img/media1.png\"\n        },\n        {\n            id: 1,\n            mediaLogo: \"/media_img/forbesindia.png\",\n            mediaContent: \"College Vidya is enabling information access to\",\n            mediaImg: \"/media_img/media2.jpg\"\n        },\n        {\n            id: 2,\n            mediaLogo: \"/media_img/ani.png\",\n            mediaContent: \"College Vidya\\u2019s goal is to bring transparency to the\",\n            mediaImg: \"/media_img/media3.png\"\n        },\n        {\n            id: 3,\n            mediaLogo: \"/media_img/webindia.png\",\n            mediaContent: \"Compare Feature\\u2019 is an initiative towards helping\",\n            mediaImg: \"/media_img/media4.png\"\n        },\n        {\n            id: 4,\n            mediaLogo: \"/media_img/lokmat.jpg\",\n            mediaContent: \"College Vidya\\u2019s Compare feature removes mediators\",\n            mediaImg: \"/media_img/media5.png\"\n        },\n        {\n            id: 5,\n            mediaLogo: \"/media_img/ly.png\",\n            mediaContent: \"College Vidya\\u2019s Compare is a one-stop solution for\",\n            mediaImg: \"/media_img/media6.png\"\n        },\n        {\n            id: 6,\n            mediaLogo: \"/media_img/yahoo.png\",\n            mediaContent: \"Get the real-time data of online and distance\",\n            mediaImg: \"/media_img/media7.png\"\n        },\n        {\n            id: 7,\n            mediaLogo: \"/media_img/financialexpress.svg\",\n            mediaContent: \"College Vidya's recent campaign prioritised the\",\n            mediaImg: \"/media_img/media8.png\"\n        },\n        {\n            id: 8,\n            mediaLogo: \"/media_img/edugraph-logo.svg\",\n            mediaContent: \"College Vidya via its recent campaign\",\n            mediaImg: \"/media_img/media9.png\"\n        },\n        {\n            id: 9,\n            mediaLogo: \"/media_img/et-brandequity.png\",\n            mediaContent: \"College Vidya aims to solve the career-related problems\",\n            mediaImg: \"/media_img/media10.png\"\n        },\n        {\n            id: 10,\n            mediaLogo: \"/media_img/the-hindu.png\",\n            mediaContent: \"College Vidya has launched a brand ifilm to encourage\",\n            mediaImg: \"/media_img/media11.png\"\n        }\n    ];\n    var breakpoints = {\n        \"992\": {\n            slidesPerView: 4\n        },\n        \"768\": {\n            slidesPerView: 3\n        },\n        \"576\": {\n            slidesPerView: 2\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_MediaPresence_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mediaPresence),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                className: \"\".concat((_styles_MediaPresence_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mediaRow)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                    sm: 12,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-center mb-5\",\n                            children: \"Voice of our Leaders & Media Presence\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                            breakpoints: breakpoints,\n                            navigation: true,\n                            slidesPerView: 2,\n                            modules: [\n                                swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                            ],\n                            spaceBetween: 20,\n                            className: \"mediaPresence_slider\",\n                            children: mediaPresenceCards.map(function(mediaCard) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaPresenceCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        mediaPresenceCard: mediaCard\n                                    }, mediaCard.id, false, {\n                                        fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 33\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 29\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n            lineNumber: 94,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/user/Desktop/cv-corporate/components/media_presence/MediaPresence.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, _this);\n};\n_c = MediaPresence;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaPresence);\nvar _c;\n$RefreshReg$(_c, \"MediaPresence\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZGlhX3ByZXNlbmNlL01lZGlhUHJlc2VuY2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFBb0Q7QUFDUTtBQUNSO0FBQ0Q7QUFDZjtBQUNoQjtBQUNXO0FBRXhCLElBQU1RLGFBQWEsR0FBRyxXQUFNOztJQUUvQixJQUFNQyxrQkFBa0IsR0FBRztRQUN2QjtZQUNJQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDQyxZQUFZLEVBQUUsZ0RBQWdEO1lBQzlEQyxRQUFRLEVBQUUsdUJBQXVCO1NBQ3BDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsU0FBUyxFQUFFLDRCQUE0QjtZQUN2Q0MsWUFBWSxFQUFFLGlEQUFpRDtZQUMvREMsUUFBUSxFQUFFLHVCQUF1QjtTQUNwQztRQUNEO1lBQ0lILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0JDLFlBQVksRUFBRSwyREFBc0Q7WUFDbEVDLFFBQU0sRUFBRSx1QkFBdUI7U0FDcEM7UUFDRDtZQUNJSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxTQUFTLEVBQUUseUJBQXlCO1lBQ3BDQyxZQUFZLEVBQUUsd0RBQW1EO1lBQy9EQyxRQUFNLEVBQUUsdUJBQXVCO1NBQ3BDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQ0MsWUFBWSxFQUFFLHdEQUFtRDtZQUMvREMsUUFBTSxFQUFFLHVCQUF1QjtTQUNwQztRQUNEO1lBQ0lILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUJDLFlBQVksRUFBRSx5REFBb0Q7WUFDbEVDLFFBQVEsRUFBRSx1QkFBdUI7U0FDcEM7UUFDRDtZQUNJSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDQyxZQUFZLEVBQUUsK0NBQStDO1lBQzdEQyxRQUFRLEVBQUUsdUJBQXVCO1NBQ3BDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsU0FBUyxFQUFFLGlDQUFpQztZQUM1Q0MsWUFBWSxFQUFFLGlEQUFpRDtZQUMvREMsUUFBUSxFQUFFLHVCQUF1QjtTQUNwQztRQUNEO1lBQ0lILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLFNBQVMsRUFBRSw4QkFBOEI7WUFDekNDLFlBQVksRUFBRSx1Q0FBdUM7WUFDckRDLFFBQVEsRUFBRSx1QkFBdUI7U0FDcEM7UUFDRDtZQUNJSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxTQUFTLEVBQUUsK0JBQStCO1lBQzFDQyxZQUFZLEVBQUUseURBQXlEO1lBQ3ZFQyxRQUFRLEVBQUUsd0JBQXdCO1NBQ3JDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLEVBQUU7WUFDTkMsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQ0MsWUFBWSxFQUFFLHVEQUF1RDtZQUNyRUMsUUFBUSxFQUFFLHdCQUF3QjtTQUNyQztLQUNKO0lBQ0QsSUFBTUMsV0FBVyxHQUFHO1FBRWhCLEtBQUssRUFBRTtZQUNIQyxhQUFhLEVBQUUsQ0FBQztTQUNuQjtRQUNELEtBQUssRUFBRTtZQUNIQSxhQUFhLEVBQUUsQ0FBQztTQUNuQjtRQUNELEtBQUssRUFBRTtZQUNIQSxhQUFhLEVBQUUsQ0FBQztTQUNuQjtLQUNKO0lBQ0gscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFZCx3RkFBb0I7a0JBQ2hDLDRFQUFDSCxzREFBUztzQkFDTiw0RUFBQ0MsZ0RBQUc7Z0JBQUNnQixTQUFTLEVBQUUsRUFBQyxDQUFrQixPQUFoQmQsbUZBQWUsQ0FBRTswQkFDaEMsNEVBQUNELGdEQUFHO29CQUFDa0IsRUFBRSxFQUFFLEVBQUU7O3NDQUNQLDhEQUFDQyxJQUFFOzRCQUFDSixTQUFTLEVBQUMsa0JBQWtCO3NDQUFDLHVDQUFxQzs7Ozs7aUNBQUs7c0NBQzNFLDhEQUFDWixnREFBTTs0QkFDSFMsV0FBVyxFQUFFQSxXQUFXOzRCQUN4QlEsVUFBVSxFQUFFLElBQUk7NEJBQ2hCUCxhQUFhLEVBQUUsQ0FBQzs0QkFDaEJRLE9BQU8sRUFBRTtnQ0FBQ2hCLDhDQUFVOzZCQUFDOzRCQUNyQmlCLFlBQVksRUFBRSxFQUFFOzRCQUNoQlAsU0FBUyxFQUFDLHNCQUFzQjtzQ0FDL0JSLGtCQUFrQixDQUFDZ0IsR0FBRyxDQUFDQyxTQUFBQSxTQUFTO3FEQUM3Qiw4REFBQ3BCLHFEQUFXOzhDQUNSLDRFQUFDRiwwREFBaUI7d0NBQW9CdUIsaUJBQWlCLEVBQUVELFNBQVM7dUNBQTFDQSxTQUFTLENBQUNoQixFQUFFOzs7OzhDQUFrQzs7Ozs7MENBQzVEOzZCQUFBLENBQ2pCOzs7OztpQ0FDSTs7Ozs7O3lCQUNQOzs7OztxQkFDSjs7Ozs7aUJBQ0U7Ozs7O2FBQ1YsQ0FDUDtDQUNGO0FBMUdZRixLQUFBQSxhQUFhO0FBNEcxQiwrREFBZUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lZGlhX3ByZXNlbmNlL01lZGlhUHJlc2VuY2UuanN4P2QwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9NZWRpYVByZXNlbmNlLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNZWRpYVByZXNlbmNlQ2FyZCBmcm9tICcuL01lZGlhUHJlc2VuY2VDYXJkJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuXG5leHBvcnQgY29uc3QgTWVkaWFQcmVzZW5jZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1lZGlhUHJlc2VuY2VDYXJkcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBtZWRpYUxvZ286IFwiL21lZGlhX2ltZy9IaW5kdXN0YW4ucG5nXCIsXG4gICAgICAgICAgICBtZWRpYUNvbnRlbnQ6IFwiSSB3YW50ZWQgdG8gY3JlYXRlIGEgcGxhdGZvcm0gdGhhdCBpcyBmcmVlIGFuZFwiLFxuICAgICAgICAgICAgbWVkaWFJbWc6IFwiL21lZGlhX2ltZy9tZWRpYTEucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBtZWRpYUxvZ286IFwiL21lZGlhX2ltZy9mb3JiZXNpbmRpYS5wbmdcIixcbiAgICAgICAgICAgIG1lZGlhQ29udGVudDogXCJDb2xsZWdlIFZpZHlhIGlzIGVuYWJsaW5nIGluZm9ybWF0aW9uIGFjY2VzcyB0b1wiLFxuICAgICAgICAgICAgbWVkaWFJbWc6IFwiL21lZGlhX2ltZy9tZWRpYTIuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBtZWRpYUxvZ286IFwiL21lZGlhX2ltZy9hbmkucG5nXCIsXG4gICAgICAgICAgICBtZWRpYUNvbnRlbnQ6IFwiQ29sbGVnZSBWaWR5YeKAmXMgZ29hbCBpcyB0byBicmluZyB0cmFuc3BhcmVuY3kgdG8gdGhlXCIsXG4gICAgICAgICAgICBtZWRpYUltZzogXCIvbWVkaWFfaW1nL21lZGlhMy5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG1lZGlhTG9nbzogXCIvbWVkaWFfaW1nL3dlYmluZGlhLnBuZ1wiLFxuICAgICAgICAgICAgbWVkaWFDb250ZW50OiBcIkNvbXBhcmUgRmVhdHVyZeKAmSBpcyBhbiBpbml0aWF0aXZlIHRvd2FyZHMgaGVscGluZ1wiLFxuICAgICAgICAgICAgbWVkaWFJbWc6IFwiL21lZGlhX2ltZy9tZWRpYTQucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBtZWRpYUxvZ286IFwiL21lZGlhX2ltZy9sb2ttYXQuanBnXCIsXG4gICAgICAgICAgICBtZWRpYUNvbnRlbnQ6IFwiQ29sbGVnZSBWaWR5YeKAmXMgQ29tcGFyZSBmZWF0dXJlIHJlbW92ZXMgbWVkaWF0b3JzXCIsXG4gICAgICAgICAgICBtZWRpYUltZzogXCIvbWVkaWFfaW1nL21lZGlhNS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIG1lZGlhTG9nbzogXCIvbWVkaWFfaW1nL2x5LnBuZ1wiLFxuICAgICAgICAgICAgbWVkaWFDb250ZW50OiBcIkNvbGxlZ2UgVmlkeWHigJlzIENvbXBhcmUgaXMgYSBvbmUtc3RvcCBzb2x1dGlvbiBmb3JcIixcbiAgICAgICAgICAgIG1lZGlhSW1nOiBcIi9tZWRpYV9pbWcvbWVkaWE2LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgbWVkaWFMb2dvOiBcIi9tZWRpYV9pbWcveWFob28ucG5nXCIsXG4gICAgICAgICAgICBtZWRpYUNvbnRlbnQ6IFwiR2V0IHRoZSByZWFsLXRpbWUgZGF0YSBvZiBvbmxpbmUgYW5kIGRpc3RhbmNlXCIsXG4gICAgICAgICAgICBtZWRpYUltZzogXCIvbWVkaWFfaW1nL21lZGlhNy5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIG1lZGlhTG9nbzogXCIvbWVkaWFfaW1nL2ZpbmFuY2lhbGV4cHJlc3Muc3ZnXCIsXG4gICAgICAgICAgICBtZWRpYUNvbnRlbnQ6IFwiQ29sbGVnZSBWaWR5YSdzIHJlY2VudCBjYW1wYWlnbiBwcmlvcml0aXNlZCB0aGVcIixcbiAgICAgICAgICAgIG1lZGlhSW1nOiBcIi9tZWRpYV9pbWcvbWVkaWE4LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgbWVkaWFMb2dvOiBcIi9tZWRpYV9pbWcvZWR1Z3JhcGgtbG9nby5zdmdcIixcbiAgICAgICAgICAgIG1lZGlhQ29udGVudDogXCJDb2xsZWdlIFZpZHlhIHZpYSBpdHMgcmVjZW50IGNhbXBhaWduXCIsXG4gICAgICAgICAgICBtZWRpYUltZzogXCIvbWVkaWFfaW1nL21lZGlhOS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgIG1lZGlhTG9nbzogXCIvbWVkaWFfaW1nL2V0LWJyYW5kZXF1aXR5LnBuZ1wiLFxuICAgICAgICAgICAgbWVkaWFDb250ZW50OiBcIkNvbGxlZ2UgVmlkeWEgYWltcyB0byBzb2x2ZSB0aGUgY2FyZWVyLXJlbGF0ZWQgcHJvYmxlbXNcIixcbiAgICAgICAgICAgIG1lZGlhSW1nOiBcIi9tZWRpYV9pbWcvbWVkaWExMC5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgICBtZWRpYUxvZ286IFwiL21lZGlhX2ltZy90aGUtaGluZHUucG5nXCIsXG4gICAgICAgICAgICBtZWRpYUNvbnRlbnQ6IFwiQ29sbGVnZSBWaWR5YSBoYXMgbGF1bmNoZWQgYSBicmFuZCBpZmlsbSB0byBlbmNvdXJhZ2VcIixcbiAgICAgICAgICAgIG1lZGlhSW1nOiBcIi9tZWRpYV9pbWcvbWVkaWExMS5wbmdcIlxuICAgICAgICB9XG4gICAgXVxuICAgIGNvbnN0IGJyZWFrcG9pbnRzID0ge1xuICAgICAgICBcbiAgICAgICAgJzk5Mic6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJzc2OCc6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDNcbiAgICAgICAgfSxcbiAgICAgICAgJzU3Nic6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDJcbiAgICAgICAgfVxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhUHJlc2VuY2V9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYVJvd31gfT5cbiAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01XCI+Vm9pY2Ugb2Ygb3VyIExlYWRlcnMgJiBNZWRpYSBQcmVzZW5jZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50cz17YnJlYWtwb2ludHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezIwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhUHJlc2VuY2Vfc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmVzZW5jZUNhcmRzLm1hcChtZWRpYUNhcmQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVByZXNlbmNlQ2FyZCBrZXk9e21lZGlhQ2FyZC5pZH0gbWVkaWFQcmVzZW5jZUNhcmQ9e21lZGlhQ2FyZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gIFxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICAgICAgICA8L0NvbD4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhUHJlc2VuY2UiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwic3R5bGVzIiwiTWVkaWFQcmVzZW5jZUNhcmQiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIk5hdmlnYXRpb24iLCJNZWRpYVByZXNlbmNlIiwibWVkaWFQcmVzZW5jZUNhcmRzIiwiaWQiLCJtZWRpYUxvZ28iLCJtZWRpYUNvbnRlbnQiLCJtZWRpYUltZyIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsImRpdiIsImNsYXNzTmFtZSIsIm1lZGlhUHJlc2VuY2UiLCJtZWRpYVJvdyIsInNtIiwiaDMiLCJuYXZpZ2F0aW9uIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsIm1hcCIsIm1lZGlhQ2FyZCIsIm1lZGlhUHJlc2VuY2VDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/media_presence/MediaPresence.jsx\n");

/***/ })

});
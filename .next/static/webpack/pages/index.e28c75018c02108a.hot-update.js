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

/***/ "./components/chat.js":
/*!****************************!*\
  !*** ./components/chat.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Chat extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidMount() {\n        this.pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_2___default())(\"6d05e834922d4afc688f\", {\n            cluster: \"mt1\",\n            encrypted: true\n        });\n        this.channel = this.pusher.subscribe(\"chat-room\");\n        this.channel.bind(\"new-message\", (param)=>{\n            let { chat = null } = param;\n            const { chats } = this.state;\n            chat && chats.push(chat);\n            this.setState({\n                chats\n            });\n        });\n        this.pusher.connection.bind(\"connected\", ()=>{\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/messages\").then((response)=>{\n                const chats = response.data.messages;\n                this.setState({\n                    chats\n                });\n            });\n        });\n    }\n    componentWillUnmount() {\n        this.pusher.disconnect();\n    }\n    render() {\n        return this.props.activeUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-bottom border-gray w-100 d-flex align-items-center bg-white\",\n                    style: {\n                        height: 90\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-dark mb-0 mx-4 px-2\",\n                        children: this.props.activeUser\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vince\\\\Desktop\\\\Projects\\\\ChatApp\\\\components\\\\chat.js\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vince\\\\Desktop\\\\Projects\\\\ChatApp\\\\components\\\\chat.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-top border-gray w-100 px-4 d-flex align-items-center bg-light\",\n                    style: {\n                        minHeight: 90\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"form-control px-3 py-2\",\n                        onKeyUp: this.handleKeyUp,\n                        placeholder: \"Enter a chat message\",\n                        style: {\n                            resize: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vince\\\\Desktop\\\\Projects\\\\ChatApp\\\\components\\\\chat.js\",\n                        lineNumber: 55,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vince\\\\Desktop\\\\Projects\\\\ChatApp\\\\components\\\\chat.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vince\\\\Desktop\\\\Projects\\\\ChatApp\\\\components\\\\chat.js\",\n            lineNumber: 48,\n            columnNumber: 44\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            chats: []\n        };\n        this.handleKeyUp = (evt)=>{\n            const value = evt.target.value;\n            if (evt.keyCode === 13 && !evt.shiftKey) {\n                const { activeUser: user } = this.props;\n                const chat = {\n                    user,\n                    message: value,\n                    timsstamp: +new Date\n                };\n                evt.target.value = \"\";\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/message\", chat);\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ3hCO0FBQ0s7QUFFL0IsTUFBTUssYUFBYUosNENBQVNBO0lBR3hCSyxvQkFBbUI7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJSCxrREFBTUEsQ0FBQ0ksc0JBQTBCLEVBQUM7WUFDaERHLFNBQVNILEtBQThCO1lBQ3ZDSyxXQUFXO1FBQ2Y7UUFFQSxJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDO1FBRXJDLElBQUksQ0FBQ0QsT0FBTyxDQUFDRSxJQUFJLENBQUMsZUFBZTtnQkFBQyxFQUFFQyxPQUFPLElBQUksRUFBRTtZQUM3QyxNQUFNLEVBQUNDLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQ0MsS0FBSztZQUMxQkYsUUFBUUMsTUFBTUUsSUFBSSxDQUFDSDtZQUNuQixJQUFJLENBQUNJLFFBQVEsQ0FBQztnQkFBQ0g7WUFBSztRQUN4QjtRQUVBLElBQUksQ0FBQ1gsTUFBTSxDQUFDZSxVQUFVLENBQUNOLElBQUksQ0FBQyxhQUFhO1lBQ3JDYixrREFBVSxDQUFDLGFBQ05xQixJQUFJLENBQUNDLENBQUFBO2dCQUNGLE1BQU1QLFFBQVFPLFNBQVNDLElBQUksQ0FBQ0MsUUFBUTtnQkFDcEMsSUFBSSxDQUFDTixRQUFRLENBQUM7b0JBQUVIO2dCQUFNO1lBQzFCO1FBQ1I7SUFDSjtJQUVBVSx1QkFBc0I7UUFDbEIsSUFBSSxDQUFDckIsTUFBTSxDQUFDc0IsVUFBVTtJQUMxQjtJQWNBQyxTQUFRO1FBQ0YsT0FBUSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxrQkFBSSw4REFBQzlCLDJDQUFRQTs7OEJBRXhDLDhEQUFDK0I7b0JBQUlDLFdBQVU7b0JBQXFFQyxPQUFPO3dCQUFFQyxRQUFRO29CQUFHOzhCQUN0Ryw0RUFBQ0M7d0JBQUdILFdBQVU7a0NBQTRCLElBQUksQ0FBQ0gsS0FBSyxDQUFDQyxVQUFVOzs7Ozs7Ozs7Ozs4QkFHakUsOERBQUNDO29CQUFJQyxXQUFVO29CQUF1RUMsT0FBTzt3QkFBRUcsV0FBVztvQkFBRzs4QkFDM0csNEVBQUNDO3dCQUFTTCxXQUFVO3dCQUF5Qk0sU0FBUyxJQUFJLENBQUNDLFdBQVc7d0JBQUVDLGFBQVk7d0JBQXVCUCxPQUFPOzRCQUFFUSxRQUFRO3dCQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztJQUl6STs7O2FBckRKeEIsUUFBUTtZQUFFRCxPQUFPLEVBQUU7UUFBQzthQTZCcEJ1QixjQUFjRyxDQUFBQTtZQUNWLE1BQU1DLFFBQVFELElBQUlFLE1BQU0sQ0FBQ0QsS0FBSztZQUU5QixJQUFHRCxJQUFJRyxPQUFPLEtBQUssTUFBTSxDQUFDSCxJQUFJSSxRQUFRLEVBQUM7Z0JBQ25DLE1BQU0sRUFBRWhCLFlBQVlpQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUNsQixLQUFLO2dCQUN2QyxNQUFNZCxPQUFPO29CQUFFZ0M7b0JBQU1DLFNBQVNMO29CQUFPTSxXQUFXLENBQUMsSUFBSUM7Z0JBQUk7Z0JBRXpEUixJQUFJRSxNQUFNLENBQUNELEtBQUssR0FBRztnQkFDbkIxQyxrREFBVSxDQUFDLFlBQVljO1lBQzNCO1FBQ0o7O0FBZUo7QUFFQSwrREFBZVosSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXQuanM/NjY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7IGNoYXRzOiBbXSB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIocHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9LRVkse1xyXG4gICAgICAgICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ2NoYXQtcm9vbScpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZCgnbmV3LW1lc3NhZ2UnLCAoeyBjaGF0ID0gbnVsbCB9KT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7Y2hhdHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgY2hhdCAmJiBjaGF0cy5wdXNoKGNoYXQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGF0c30pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpPT57XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhdHMgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICBcclxuICAgICAgICBpZihldnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2dC5zaGlmdEtleSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWN0aXZlVXNlcjogdXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgY29uc3QgY2hhdCA9IHsgdXNlciwgbWVzc2FnZTogdmFsdWUsIHRpbXNzdGFtcDogK25ldyBEYXRlfTtcclxuICAgIFxyXG4gICAgICAgICAgICBldnQudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXkgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiIHN0eWxlPXt7IGhlaWdodDogOTAgfX0+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFyayBtYi0wIG14LTQgcHgtMlwiPnt0aGlzLnByb3BzLmFjdGl2ZVVzZXJ9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWdyYXkgdy0xMDAgcHgtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IG1lc3NhZ2VcIiBzdHlsZT17eyByZXNpemU6ICdub25lJyB9fT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0ZyYWdtZW50PiApXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJheGlvcyIsIlB1c2hlciIsIkNoYXQiLCJjb21wb25lbnREaWRNb3VudCIsInB1c2hlciIsInByb2Nlc3MiLCJlbnYiLCJQVVNIRVJfQVBQX0tFWSIsImNsdXN0ZXIiLCJQVVNIRVJfQVBQX0NMVVNURVIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImNoYXQiLCJjaGF0cyIsInN0YXRlIiwicHVzaCIsInNldFN0YXRlIiwiY29ubmVjdGlvbiIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRpc2Nvbm5lY3QiLCJyZW5kZXIiLCJwcm9wcyIsImFjdGl2ZVVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImgyIiwibWluSGVpZ2h0IiwidGV4dGFyZWEiLCJvbktleVVwIiwiaGFuZGxlS2V5VXAiLCJwbGFjZWhvbGRlciIsInJlc2l6ZSIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidXNlciIsIm1lc3NhZ2UiLCJ0aW1zc3RhbXAiLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chat.js\n"));

/***/ })

});
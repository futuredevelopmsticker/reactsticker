(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Index_index_tsx"],{

/***/ "./resources/js/Pages/Index/index.tsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Index/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var IndexPage = function IndexPage() {
  return react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("p", null, "Welcome to Sticker app"), react_1["default"].createElement("p", null, react_1["default"].createElement("a", {
    href: "/login"
  }, "Login here")), react_1["default"].createElement("p", null, react_1["default"].createElement("a", {
    href: "/register"
  }, "Register here")));
};

exports.default = IndexPage;

/***/ })

}]);
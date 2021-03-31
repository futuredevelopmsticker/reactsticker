(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Sticker_List_index_tsx"],{

/***/ "./resources/js/Pages/Sticker/List/index.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Sticker/List/index.tsx ***!
  \***************************************************/
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

var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/general/layout */ "./resources/js/components/general/layout/index.tsx"));

var StickerListPage = function StickerListPage(_a) {
  var stickers = _a.stickers;
  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-sm-8"
  }, react_1["default"].createElement("ul", {
    className: "list-group"
  }, stickers.length > 0 && stickers.map(function (sticker, index) {
    return react_1["default"].createElement("li", {
      className: "list-group-item",
      key: index
    }, react_1["default"].createElement("p", null, "Title: ", sticker.title));
  })))));
};

exports.default = StickerListPage;

/***/ }),

/***/ "./resources/js/components/general/layout/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/general/layout/index.tsx ***!
  \**********************************************************/
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

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement("div", {
    className: "container"
  }, children);
};

exports.default = Layout;

/***/ })

}]);
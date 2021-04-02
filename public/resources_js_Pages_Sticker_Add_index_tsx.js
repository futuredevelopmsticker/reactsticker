(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Sticker_Add_index_tsx"],{

/***/ "./resources/js/Pages/Sticker/Add/index.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Sticker/Add/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/general/layout */ "./resources/js/components/general/layout/index.tsx"));

var StickerAddPage = function StickerAddPage() {
  var _a = react_1.useState({
    link: " ",
    title: 'Some hardcoded title'
  }),
      state = _a[0],
      setState = _a[1];

  var handleChange = function handleChange(event) {
    var _a;

    setState(__assign(__assign({}, state), (_a = {}, _a[event.currentTarget.name] = event.currentTarget.value, _a)));
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    inertia_1.Inertia.post("/sticker/preview", state);
  };

  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-sm-8"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement("div", {
    className: "form-group"
  }, react_1["default"].createElement("label", {
    htmlFor: "link"
  }, "Link"), react_1["default"].createElement("input", {
    type: "text",
    className: "form-control",
    name: "link",
    onChange: handleChange,
    placeholder: "Enter your link here"
  }))))));
};

exports.default = StickerAddPage;

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
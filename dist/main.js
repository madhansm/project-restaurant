/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! less-opaque.png */ "./src/less-opaque.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./beer-background.jpg */ "./src/beer-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {    \n    margin: 0;\n    padding: 0;    \n}\n\n#content {\n    display: flex;\n}\n\n.menu {\n    background-color: red;\n    max-width: 25vw;\n    padding: 10px;\n    min-height: 97.9vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n#logo {\n    max-height: 15em;\n}\n\n.tabs {\n    list-style: none;\n    text-align: center;\n    margin: 0;\n    margin-top: 5%;\n    padding: 10px;\n\n}\n\n\n#footer {\n    \n    margin-top: auto;\n    color: lightgray;\n    padding: 10px 40px;\n\n    text-decoration: none;\n}\n\n.landing-tab-background {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: repeat;\n    width: 100vw;\n}\n\n.landing-tab {\n    display: flex;\n    flex-direction: column;\n    padding: 2em 3em;\n    max-width: 40em;\n}\n\nh1 {\n    font-family: 'Arvo', serif;\n    font-weight: 700;\n    font-style: normal;\n}\n\np, .beer-description {\n    font-style: italic;\n    font-family: \"minion-pro\", serif;\n    font-weight: 400;\n    line-height: 1.4em;\n    \n}\n\nbutton {\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    width: 15rem;\n    max-width: 25vw;\n    background-color: inherit;\n    font-family: 'Roboto Slab', serif;\n    font-weight: bolder;\n    font-size: 16px;\n    transition: 0.3s;\n}\n\n#beers-btn {\n    font-family: 'Arvo', serif;\n    \n    background-color: #66b39f;\n    padding: 1em 1.5em;\n    margin-top: 1em;\n    width: fit-content;\n    border-radius: 5px;\n\n    color: whitesmoke;\n    font-family: \"museo-slab\", sans-serif;\n    font-weight: bolder;\n    font-size: 12px;\n\n\n}\n\n#beers-btn:hover {\n    background-color: #4CAF50; /* Green */\n    color: white;\n    box-shadow: none;\n}\n\n#beers-btn:active {\n    transform: none;\n}\n\nbutton:hover {\n    color: rgb(255, 255, 95);\n    box-shadow: 2px 5px 6px 0 rgba(0,0,0,0.24), 3px 10px 11px 0 rgba(0,0,0,0.19);\n}\n\nbutton:active {\n    background-color: rgb(192, 0, 0);\n    transform:translateY(2px)\n}\n\n.beers-background {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: repeat;\n    background-size: 15rem;\n    width: 100vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.price-list {\n    color: rgb(87, 21, 21);\n    margin: 3rem 0 -2rem 0;\n}\n\n.beers-tab {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n    width: 50vw;\n    margin: 5rem;\n}\n\n.beer-item {\n    width: 200px;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin: 0 1rem;\n  }\n\n.beer-image {\n    margin-left: auto;\n    margin-right: auto;\n\n    width: 7rem;\n}\n\n.beer-name,\n.price-list {\n    font-family: 'Roboto Slab', serif;\n    font-weight: bolder;\n    font-size: 1.35rem;\n}\n\n.beer-description {\n    font-size: 1.15rem;\n}\n\n.hide-tab {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,aAAa;IACb,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,aAAa;;AAEjB;;;AAGA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;;IAElB,qBAAqB;AACzB;;AAEA;IACI,mDAAkC;IAClC,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;;AAEtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;;IAE1B,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;;IAElB,iBAAiB;IACjB,qCAAqC;IACrC,mBAAmB;IACnB,eAAe;;;AAGnB;;AAEA;IACI,yBAAyB,EAAE,UAAU;IACrC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,4EAA4E;AAChF;;AAEA;IACI,gCAAgC;IAChC;AACJ;;AAEA;IACI,mDAAwC;IACxC,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,WAAW;IACX,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;EAChB;;AAEF;IACI,iBAAiB;IACjB,kBAAkB;;IAElB,WAAW;AACf;;AAEA;;IAEI,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {    \n    margin: 0;\n    padding: 0;    \n}\n\n#content {\n    display: flex;\n}\n\n.menu {\n    background-color: red;\n    max-width: 25vw;\n    padding: 10px;\n    min-height: 97.9vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n#logo {\n    max-height: 15em;\n}\n\n.tabs {\n    list-style: none;\n    text-align: center;\n    margin: 0;\n    margin-top: 5%;\n    padding: 10px;\n\n}\n\n\n#footer {\n    \n    margin-top: auto;\n    color: lightgray;\n    padding: 10px 40px;\n\n    text-decoration: none;\n}\n\n.landing-tab-background {\n    background: url('less-opaque.png');\n    background-repeat: repeat;\n    width: 100vw;\n}\n\n.landing-tab {\n    display: flex;\n    flex-direction: column;\n    padding: 2em 3em;\n    max-width: 40em;\n}\n\nh1 {\n    font-family: 'Arvo', serif;\n    font-weight: 700;\n    font-style: normal;\n}\n\np, .beer-description {\n    font-style: italic;\n    font-family: \"minion-pro\", serif;\n    font-weight: 400;\n    line-height: 1.4em;\n    \n}\n\nbutton {\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    width: 15rem;\n    max-width: 25vw;\n    background-color: inherit;\n    font-family: 'Roboto Slab', serif;\n    font-weight: bolder;\n    font-size: 16px;\n    transition: 0.3s;\n}\n\n#beers-btn {\n    font-family: 'Arvo', serif;\n    \n    background-color: #66b39f;\n    padding: 1em 1.5em;\n    margin-top: 1em;\n    width: fit-content;\n    border-radius: 5px;\n\n    color: whitesmoke;\n    font-family: \"museo-slab\", sans-serif;\n    font-weight: bolder;\n    font-size: 12px;\n\n\n}\n\n#beers-btn:hover {\n    background-color: #4CAF50; /* Green */\n    color: white;\n    box-shadow: none;\n}\n\n#beers-btn:active {\n    transform: none;\n}\n\nbutton:hover {\n    color: rgb(255, 255, 95);\n    box-shadow: 2px 5px 6px 0 rgba(0,0,0,0.24), 3px 10px 11px 0 rgba(0,0,0,0.19);\n}\n\nbutton:active {\n    background-color: rgb(192, 0, 0);\n    transform:translateY(2px)\n}\n\n.beers-background {\n    background: url(\"./beer-background.jpg\");\n    background-repeat: repeat;\n    background-size: 15rem;\n    width: 100vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.price-list {\n    color: rgb(87, 21, 21);\n    margin: 3rem 0 -2rem 0;\n}\n\n.beers-tab {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n    width: 50vw;\n    margin: 5rem;\n}\n\n.beer-item {\n    width: 200px;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin: 0 1rem;\n  }\n\n.beer-image {\n    margin-left: auto;\n    margin-right: auto;\n\n    width: 7rem;\n}\n\n.beer-name,\n.price-list {\n    font-family: 'Roboto Slab', serif;\n    font-weight: bolder;\n    font-size: 1.35rem;\n}\n\n.beer-description {\n    font-size: 1.15rem;\n}\n\n.hide-tab {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/beers-tab.js":
/*!**************************!*\
  !*** ./src/beers-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _beer_images_beer_dark_knight_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer-images/beer-dark-knight.jpg */ "./src/beer-images/beer-dark-knight.jpg");
/* harmony import */ var _beer_images_beer_colonial_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beer-images/beer-colonial.jpg */ "./src/beer-images/beer-colonial.jpg");
/* harmony import */ var _beer_images_beer_red_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beer-images/beer-red.jpg */ "./src/beer-images/beer-red.jpg");
/* harmony import */ var _beer_images_beer_weiss_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beer-images/beer-weiss.jpg */ "./src/beer-images/beer-weiss.jpg");
/* harmony import */ var _beer_images_beer_tintin_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-images/beer-tintin.jpg */ "./src/beer-images/beer-tintin.jpg");
/* harmony import */ var _beer_images_beer_blonde_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beer-images/beer-blonde.jpg */ "./src/beer-images/beer-blonde.jpg");








//background
const backgroundEl = document.createElement("div");
backgroundEl.classList.add("beers-background");

//beer prices
let beerPrices = "Full Pint (500ml) -Rs.255 | Half Pint (250ml) -Rs. 255";
let priceEl = document.createElement("div");
priceEl.classList.add("price-list");
priceEl.append(beerPrices);

backgroundEl.appendChild(priceEl);


//beers list
const beersTabEl = document.createElement("div")
beersTabEl.classList.add("beers-tab");

let beerList = [];

//beer obj constructor
function constructBeerMenu(name, image, description) {
    const nameEl = document.createElement("div");
    nameEl.classList.add('beer-name');
    nameEl.append(name);

    const imageEl = document.createElement("img");
    imageEl.classList.add("beer-image");
    imageEl.src = image;

    const descriptionEl = document.createElement("div");
    descriptionEl.classList.add("beer-description");
    descriptionEl.append(description);
    
    return {
        nameEl, imageEl, descriptionEl
    }
}

//add beer list to array push new beers here, also import images
beerList.push(constructBeerMenu ("DARK KNIGHT", _beer_images_beer_dark_knight_jpg__WEBPACK_IMPORTED_MODULE_0__, "A very dark, full-bodied, roasty, malty ale"));
beerList.push(constructBeerMenu("COLONIAL", _beer_images_beer_colonial_jpg__WEBPACK_IMPORTED_MODULE_1__, "A bitter, highly hopped, English style ale"));
beerList.push(constructBeerMenu("RED", _beer_images_beer_red_jpg__WEBPACK_IMPORTED_MODULE_2__, "A full bodied, Irish red ale"));
beerList.push(constructBeerMenu("WEISS", _beer_images_beer_weiss_jpg__WEBPACK_IMPORTED_MODULE_3__, "A full bodied, refreshing, Bavarian"));
beerList.push(constructBeerMenu("TINTIN", _beer_images_beer_tintin_jpg__WEBPACK_IMPORTED_MODULE_4__, "A refreshing, Belgian-style fruity ale"));
beerList.push(constructBeerMenu("BLONDE", _beer_images_beer_blonde_jpg__WEBPACK_IMPORTED_MODULE_5__, "A light, crisp and refreshing ale"));

//push beer list to DOM
beerList.forEach(beer => {
    
    const beerItemEl = document.createElement("div");
    beerItemEl.classList.add("beer-item")
    beerItemEl.appendChild(beer.imageEl);
    
    beerItemEl.appendChild(beer.nameEl);
    beerItemEl.appendChild(beer.descriptionEl)

    beersTabEl.appendChild(beerItemEl);
});

//push all to DOM
backgroundEl.appendChild(beersTabEl);

console.log("beers script executed");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundEl);

/***/ }),

/***/ "./src/food-drinks.js":
/*!****************************!*\
  !*** ./src/food-drinks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let foodEl = document.createElement("h1");
foodEl.innerText = "Food and Drinks Tab";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodEl);


console.log("Food-drinks executed");


/***/ }),

/***/ "./src/kudix-club.js":
/*!***************************!*\
  !*** ./src/kudix-club.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let kudixEl = document.createElement("h1");
kudixEl.innerText = "Kudix Tab";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kudixEl);


console.log("KUDIX executed");

/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentEl": () => (/* binding */ contentEl),
/* harmony export */   "tabsElementList": () => (/* binding */ tabsElementList)
/* harmony export */ });
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");


//get content element from html
const contentEl = document.getElementById("content");

//create menu div
let menuEl = document.createElement("div");
menuEl.classList.add("menu");

//add logo to menu
const logoEl = document.createElement("img");
logoEl.setAttribute("id", "logo");
logoEl.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;
menuEl.appendChild(logoEl);

//list of buttons/tabs to be displayed in the menu

//add new tabs here in the array below
let tabsList = ["BEERS", "FOOD & DRINKS", "KUDIX CLUB", "BREWERY TOURS", "BLOG", "PETS @ TOIT"];

//add list of buttons/tabs to menu
const tabsEl = document.createElement("ul");
tabsEl.classList.add("tabs");

//loop to display tabs list array
let tabsElementList = []; //to export for tab display purposes

tabsList.forEach(tab => {
    let buttonEl = document.createElement("button");

    tabsElementList.push(buttonEl);

    let buttonText = document.createTextNode(tab);
    buttonEl.append(buttonText);
    let listEl = document.createElement("li");
    listEl.appendChild(buttonEl);

    tabsEl.appendChild(listEl);
});

//append list to menu
menuEl.appendChild(tabsEl);

//add footer link
const footerEl = document.createElement("a");
footerEl.href = "https://github.com/madhansm";
footerEl.setAttribute("id", "footer");
const footerText = document.createTextNode("github.com/madhansm")
footerEl.append(footerText);

menuEl.appendChild(footerEl);

//append menu to  content
contentEl.appendChild(menuEl);

console.log("landing page executed");

//export content div to index.js


/***/ }),

/***/ "./src/landing-tab.js":
/*!****************************!*\
  !*** ./src/landing-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//landing tab background
const backgroundEl = document.createElement("div");
backgroundEl.classList.add("landing-tab-background");

//landing tab starts here
let landingTabEl = document.createElement("div");
landingTabEl.classList.add("landing-tab");

//h1
const h1El = document.createElement("h1");
h1El.innerHTML = "We are Toit. <br> You should be too…";
landingTabEl.appendChild(h1El);

//landing tab description-text
let descriptionArray = [
    "Toit is a brew pub, brewing a revolutionary culture. <br>We started out as a sweet little Bengaluru brewing culture with the promise of some bodacious brews, fabulous foods and a supreme brew-pub experience.",
    "And that's exactly what we've brought to Mumbai & now to Pune!",
    "You can find us doing our thing on 100ft road Indiranagar in Bengaluru, in Lower Parel in Mumbai, and KalyaniNagar in Pune.. passing on our passion for beer to others.",
    "Come by. Try everything twice. Learn, love, linger, stagger, slur, whatever. This is a revolution, and we've got beer."
]

descriptionArray.forEach(description => {
    let paraEl = document.createElement("p");
    paraEl.innerHTML = description;
    landingTabEl.appendChild(paraEl);
});

const seeBeersEl = document.createElement("button");
seeBeersEl.setAttribute("id", "beers-btn");
seeBeersEl.innerHTML = "SEE OUR BEERS";

landingTabEl.appendChild(seeBeersEl);

backgroundEl.appendChild(landingTabEl)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundEl);

/***/ }),

/***/ "./src/beer-background.jpg":
/*!*********************************!*\
  !*** ./src/beer-background.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e4c6f6b0c23f84b5917.jpg";

/***/ }),

/***/ "./src/beer-images/beer-blonde.jpg":
/*!*****************************************!*\
  !*** ./src/beer-images/beer-blonde.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35b3e4c94a1346e1ec10.jpg";

/***/ }),

/***/ "./src/beer-images/beer-colonial.jpg":
/*!*******************************************!*\
  !*** ./src/beer-images/beer-colonial.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96c6b678646dc013142c.jpg";

/***/ }),

/***/ "./src/beer-images/beer-dark-knight.jpg":
/*!**********************************************!*\
  !*** ./src/beer-images/beer-dark-knight.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df87a5b77e7ad18e5a91.jpg";

/***/ }),

/***/ "./src/beer-images/beer-red.jpg":
/*!**************************************!*\
  !*** ./src/beer-images/beer-red.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1ce42c22805823f7135.jpg";

/***/ }),

/***/ "./src/beer-images/beer-tintin.jpg":
/*!*****************************************!*\
  !*** ./src/beer-images/beer-tintin.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bc1770b8e167f1f450c.jpg";

/***/ }),

/***/ "./src/beer-images/beer-weiss.jpg":
/*!****************************************!*\
  !*** ./src/beer-images/beer-weiss.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7861dc8aa3e5ca1358a0.jpg";

/***/ }),

/***/ "./src/less-opaque.png":
/*!*****************************!*\
  !*** ./src/less-opaque.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "165730b79ae26a5c2f4a.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3425465a7d6d1d35aa4d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _landing_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.js */ "./src/landing-page.js");
/* harmony import */ var _landing_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-tab.js */ "./src/landing-tab.js");
/* harmony import */ var _beers_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beers-tab.js */ "./src/beers-tab.js");
/* harmony import */ var _food_drinks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-drinks.js */ "./src/food-drinks.js");
/* harmony import */ var _kudix_club_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kudix-club.js */ "./src/kudix-club.js");








//landing page tab as deafult
let tabToBeDisplayed = _landing_tab_js__WEBPACK_IMPORTED_MODULE_2__["default"];

_landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.appendChild(tabToBeDisplayed);

//link logo to home page
const logo = document.getElementById('logo');
logo.addEventListener("click", () => {
    _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.removeChild(tabToBeDisplayed);
    tabToBeDisplayed = _landing_tab_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.appendChild(tabToBeDisplayed);
});

//link to see our beers btn
let beersBtn = document.getElementById("beers-btn");
beersBtn.addEventListener("click", ()=>{
    _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.removeChild(tabToBeDisplayed);
    tabToBeDisplayed = _beers_tab_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.appendChild(tabToBeDisplayed);
})

//tab to display
let pageArray = [_beers_tab_js__WEBPACK_IMPORTED_MODULE_3__["default"], _food_drinks_js__WEBPACK_IMPORTED_MODULE_4__["default"], _kudix_club_js__WEBPACK_IMPORTED_MODULE_5__["default"]];

for (let index = 0; index < _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.tabsElementList.length; index++) {
    const tab = _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.tabsElementList[index];
    tab.addEventListener("click", ()=> {
        _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.removeChild(tabToBeDisplayed);
        tabToBeDisplayed = pageArray[index];
        _landing_page_js__WEBPACK_IMPORTED_MODULE_1__.contentEl.appendChild(tabToBeDisplayed);
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9iZWVycy10YWIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2Zvb2QtZHJpbmtzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9rdWRpeC1jbHViLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2xhbmRpbmctdGFiLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwibGVzcy1vcGFxdWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9iZWVyLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgeyAgICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyAgICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA5Ny45dmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNsb2dvIHtcXG4gICAgbWF4LWhlaWdodDogMTVlbTtcXG59XFxuXFxuLnRhYnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcblxcbiNmb290ZXIge1xcbiAgICBcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcblxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sYW5kaW5nLXRhYi1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubGFuZGluZy10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyZW0gM2VtO1xcbiAgICBtYXgtd2lkdGg6IDQwZW07XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxucCwgLmJlZXItZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWluaW9uLXByb1xcXCIsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIFxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4jYmVlcnMtYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiMzlmO1xcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LWZhbWlseTogXFxcIm11c2VvLXNsYWJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuXFxuXFxufVxcblxcbiNiZWVycy1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbiNiZWVycy1idG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCA5NSk7XFxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgM3B4IDEwcHggMTFweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMnB4KVxcbn1cXG5cXG4uYmVlcnMtYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTVyZW07XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmljZS1saXN0IHtcXG4gICAgY29sb3I6IHJnYig4NywgMjEsIDIxKTtcXG4gICAgbWFyZ2luOiAzcmVtIDAgLTJyZW0gMDtcXG59XFxuXFxuLmJlZXJzLXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgbWFyZ2luOiA1cmVtO1xcbn1cXG5cXG4uYmVlci1pdGVtIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgfVxcblxcbi5iZWVyLWltYWdlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG5cXG4gICAgd2lkdGg6IDdyZW07XFxufVxcblxcbi5iZWVyLW5hbWUsXFxuLnByaWNlLWxpc3Qge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG59XFxuXFxuLmJlZXItZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5oaWRlLXRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLGFBQWE7O0FBRWpCOzs7QUFHQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7SUFFbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbURBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjs7SUFFMUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZUFBZTs7O0FBR25COztBQUVBO0lBQ0kseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLG1EQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHsgICAgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWluLWhlaWdodDogOTcuOXZoO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jbG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDE1ZW07XFxufVxcblxcbi50YWJzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG5cXG4jZm9vdGVyIHtcXG4gICAgXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG5cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGFuZGluZy10YWItYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnbGVzcy1vcGFxdWUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmxhbmRpbmctdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMmVtIDNlbTtcXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbnAsIC5iZWVyLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWZhbWlseTogXFxcIm1pbmlvbi1wcm9cXFwiLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuI2JlZXJzLWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YjM5ZjtcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJtdXNlby1zbGFiXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcblxcblxcbn1cXG5cXG4jYmVlcnMtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4jYmVlcnMtYnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgOTUpO1xcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDNweCAxMHB4IDExcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDJweClcXG59XFxuXFxuLmJlZXJzLWJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYmVlci1iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpY2UtbGlzdCB7XFxuICAgIGNvbG9yOiByZ2IoODcsIDIxLCAyMSk7XFxuICAgIG1hcmdpbjogM3JlbSAwIC0ycmVtIDA7XFxufVxcblxcbi5iZWVycy10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIG1hcmdpbjogNXJlbTtcXG59XFxuXFxuLmJlZXItaXRlbSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gIH1cXG5cXG4uYmVlci1pbWFnZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxuICAgIHdpZHRoOiA3cmVtO1xcbn1cXG5cXG4uYmVlci1uYW1lLFxcbi5wcmljZS1saXN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuMzVyZW07XFxufVxcblxcbi5iZWVyLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uaGlkZS10YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltZ0RhcmtLbmlnaHQgZnJvbSAnLi9iZWVyLWltYWdlcy9iZWVyLWRhcmsta25pZ2h0LmpwZyc7XG5pbXBvcnQgaW1nQ29sb25pYWwgZnJvbSAnLi9iZWVyLWltYWdlcy9iZWVyLWNvbG9uaWFsLmpwZyc7XG5pbXBvcnQgaW1nUmVkIGZyb20gJy4vYmVlci1pbWFnZXMvYmVlci1yZWQuanBnJztcbmltcG9ydCBpbWdXZWlzcyBmcm9tICcuL2JlZXItaW1hZ2VzL2JlZXItd2Vpc3MuanBnJztcbmltcG9ydCBpbWdUaW50aW4gZnJvbSAnLi9iZWVyLWltYWdlcy9iZWVyLXRpbnRpbi5qcGcnO1xuaW1wb3J0IGltZ0Jsb25kZSBmcm9tICcuL2JlZXItaW1hZ2VzL2JlZXItYmxvbmRlLmpwZyc7XG5cblxuLy9iYWNrZ3JvdW5kXG5jb25zdCBiYWNrZ3JvdW5kRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmFja2dyb3VuZEVsLmNsYXNzTGlzdC5hZGQoXCJiZWVycy1iYWNrZ3JvdW5kXCIpO1xuXG4vL2JlZXIgcHJpY2VzXG5sZXQgYmVlclByaWNlcyA9IFwiRnVsbCBQaW50ICg1MDBtbCkgLVJzLjI1NSB8IEhhbGYgUGludCAoMjUwbWwpIC1Scy4gMjU1XCI7XG5sZXQgcHJpY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcmljZUVsLmNsYXNzTGlzdC5hZGQoXCJwcmljZS1saXN0XCIpO1xucHJpY2VFbC5hcHBlbmQoYmVlclByaWNlcyk7XG5cbmJhY2tncm91bmRFbC5hcHBlbmRDaGlsZChwcmljZUVsKTtcblxuXG4vL2JlZXJzIGxpc3RcbmNvbnN0IGJlZXJzVGFiRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5iZWVyc1RhYkVsLmNsYXNzTGlzdC5hZGQoXCJiZWVycy10YWJcIik7XG5cbmxldCBiZWVyTGlzdCA9IFtdO1xuXG4vL2JlZXIgb2JqIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBjb25zdHJ1Y3RCZWVyTWVudShuYW1lLCBpbWFnZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVFbC5jbGFzc0xpc3QuYWRkKCdiZWVyLW5hbWUnKTtcbiAgICBuYW1lRWwuYXBwZW5kKG5hbWUpO1xuXG4gICAgY29uc3QgaW1hZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2VFbC5jbGFzc0xpc3QuYWRkKFwiYmVlci1pbWFnZVwiKTtcbiAgICBpbWFnZUVsLnNyYyA9IGltYWdlO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25FbC5jbGFzc0xpc3QuYWRkKFwiYmVlci1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbkVsLmFwcGVuZChkZXNjcmlwdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZUVsLCBpbWFnZUVsLCBkZXNjcmlwdGlvbkVsXG4gICAgfVxufVxuXG4vL2FkZCBiZWVyIGxpc3QgdG8gYXJyYXkgcHVzaCBuZXcgYmVlcnMgaGVyZSwgYWxzbyBpbXBvcnQgaW1hZ2VzXG5iZWVyTGlzdC5wdXNoKGNvbnN0cnVjdEJlZXJNZW51IChcIkRBUksgS05JR0hUXCIsIGltZ0RhcmtLbmlnaHQsIFwiQSB2ZXJ5IGRhcmssIGZ1bGwtYm9kaWVkLCByb2FzdHksIG1hbHR5IGFsZVwiKSk7XG5iZWVyTGlzdC5wdXNoKGNvbnN0cnVjdEJlZXJNZW51KFwiQ09MT05JQUxcIiwgaW1nQ29sb25pYWwsIFwiQSBiaXR0ZXIsIGhpZ2hseSBob3BwZWQsIEVuZ2xpc2ggc3R5bGUgYWxlXCIpKTtcbmJlZXJMaXN0LnB1c2goY29uc3RydWN0QmVlck1lbnUoXCJSRURcIiwgaW1nUmVkLCBcIkEgZnVsbCBib2RpZWQsIElyaXNoIHJlZCBhbGVcIikpO1xuYmVlckxpc3QucHVzaChjb25zdHJ1Y3RCZWVyTWVudShcIldFSVNTXCIsIGltZ1dlaXNzLCBcIkEgZnVsbCBib2RpZWQsIHJlZnJlc2hpbmcsIEJhdmFyaWFuXCIpKTtcbmJlZXJMaXN0LnB1c2goY29uc3RydWN0QmVlck1lbnUoXCJUSU5USU5cIiwgaW1nVGludGluLCBcIkEgcmVmcmVzaGluZywgQmVsZ2lhbi1zdHlsZSBmcnVpdHkgYWxlXCIpKTtcbmJlZXJMaXN0LnB1c2goY29uc3RydWN0QmVlck1lbnUoXCJCTE9OREVcIiwgaW1nQmxvbmRlLCBcIkEgbGlnaHQsIGNyaXNwIGFuZCByZWZyZXNoaW5nIGFsZVwiKSk7XG5cbi8vcHVzaCBiZWVyIGxpc3QgdG8gRE9NXG5iZWVyTGlzdC5mb3JFYWNoKGJlZXIgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJlZXJJdGVtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJlZXJJdGVtRWwuY2xhc3NMaXN0LmFkZChcImJlZXItaXRlbVwiKVxuICAgIGJlZXJJdGVtRWwuYXBwZW5kQ2hpbGQoYmVlci5pbWFnZUVsKTtcbiAgICBcbiAgICBiZWVySXRlbUVsLmFwcGVuZENoaWxkKGJlZXIubmFtZUVsKTtcbiAgICBiZWVySXRlbUVsLmFwcGVuZENoaWxkKGJlZXIuZGVzY3JpcHRpb25FbClcblxuICAgIGJlZXJzVGFiRWwuYXBwZW5kQ2hpbGQoYmVlckl0ZW1FbCk7XG59KTtcblxuLy9wdXNoIGFsbCB0byBET01cbmJhY2tncm91bmRFbC5hcHBlbmRDaGlsZChiZWVyc1RhYkVsKTtcblxuY29uc29sZS5sb2coXCJiZWVycyBzY3JpcHQgZXhlY3V0ZWRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmRFbDsiLCJsZXQgZm9vZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuZm9vZEVsLmlubmVyVGV4dCA9IFwiRm9vZCBhbmQgRHJpbmtzIFRhYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmb29kRWw7XG5cblxuY29uc29sZS5sb2coXCJGb29kLWRyaW5rcyBleGVjdXRlZFwiKTtcbiIsImxldCBrdWRpeEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xua3VkaXhFbC5pbm5lclRleHQgPSBcIkt1ZGl4IFRhYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBrdWRpeEVsO1xuXG5cbmNvbnNvbGUubG9nKFwiS1VESVggZXhlY3V0ZWRcIik7IiwiaW1wb3J0IGxvZ28gZnJvbScuL2xvZ28ucG5nJztcblxuLy9nZXQgY29udGVudCBlbGVtZW50IGZyb20gaHRtbFxuY29uc3QgY29udGVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4vL2NyZWF0ZSBtZW51IGRpdlxubGV0IG1lbnVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tZW51RWwuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbi8vYWRkIGxvZ28gdG8gbWVudVxuY29uc3QgbG9nb0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmxvZ29FbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ29cIik7XG5sb2dvRWwuc3JjID0gbG9nbztcbm1lbnVFbC5hcHBlbmRDaGlsZChsb2dvRWwpO1xuXG4vL2xpc3Qgb2YgYnV0dG9ucy90YWJzIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbWVudVxuXG4vL2FkZCBuZXcgdGFicyBoZXJlIGluIHRoZSBhcnJheSBiZWxvd1xubGV0IHRhYnNMaXN0ID0gW1wiQkVFUlNcIiwgXCJGT09EICYgRFJJTktTXCIsIFwiS1VESVggQ0xVQlwiLCBcIkJSRVdFUlkgVE9VUlNcIiwgXCJCTE9HXCIsIFwiUEVUUyBAIFRPSVRcIl07XG5cbi8vYWRkIGxpc3Qgb2YgYnV0dG9ucy90YWJzIHRvIG1lbnVcbmNvbnN0IHRhYnNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnRhYnNFbC5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcblxuLy9sb29wIHRvIGRpc3BsYXkgdGFicyBsaXN0IGFycmF5XG5sZXQgdGFic0VsZW1lbnRMaXN0ID0gW107IC8vdG8gZXhwb3J0IGZvciB0YWIgZGlzcGxheSBwdXJwb3Nlc1xuXG50YWJzTGlzdC5mb3JFYWNoKHRhYiA9PiB7XG4gICAgbGV0IGJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRhYnNFbGVtZW50TGlzdC5wdXNoKGJ1dHRvbkVsKTtcblxuICAgIGxldCBidXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFiKTtcbiAgICBidXR0b25FbC5hcHBlbmQoYnV0dG9uVGV4dCk7XG4gICAgbGV0IGxpc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0RWwuYXBwZW5kQ2hpbGQoYnV0dG9uRWwpO1xuXG4gICAgdGFic0VsLmFwcGVuZENoaWxkKGxpc3RFbCk7XG59KTtcblxuLy9hcHBlbmQgbGlzdCB0byBtZW51XG5tZW51RWwuYXBwZW5kQ2hpbGQodGFic0VsKTtcblxuLy9hZGQgZm9vdGVyIGxpbmtcbmNvbnN0IGZvb3RlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5mb290ZXJFbC5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vbWFkaGFuc21cIjtcbmZvb3RlckVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiZ2l0aHViLmNvbS9tYWRoYW5zbVwiKVxuZm9vdGVyRWwuYXBwZW5kKGZvb3RlclRleHQpO1xuXG5tZW51RWwuYXBwZW5kQ2hpbGQoZm9vdGVyRWwpO1xuXG4vL2FwcGVuZCBtZW51IHRvICBjb250ZW50XG5jb250ZW50RWwuYXBwZW5kQ2hpbGQobWVudUVsKTtcblxuY29uc29sZS5sb2coXCJsYW5kaW5nIHBhZ2UgZXhlY3V0ZWRcIik7XG5cbi8vZXhwb3J0IGNvbnRlbnQgZGl2IHRvIGluZGV4LmpzXG5leHBvcnQge2NvbnRlbnRFbCx0YWJzRWxlbWVudExpc3R9OyIsIi8vbGFuZGluZyB0YWIgYmFja2dyb3VuZFxuY29uc3QgYmFja2dyb3VuZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJhY2tncm91bmRFbC5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy10YWItYmFja2dyb3VuZFwiKTtcblxuLy9sYW5kaW5nIHRhYiBzdGFydHMgaGVyZVxubGV0IGxhbmRpbmdUYWJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sYW5kaW5nVGFiRWwuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctdGFiXCIpO1xuXG4vL2gxXG5jb25zdCBoMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaDFFbC5pbm5lckhUTUwgPSBcIldlIGFyZSBUb2l0LiA8YnI+IFlvdSBzaG91bGQgYmUgdG9v4oCmXCI7XG5sYW5kaW5nVGFiRWwuYXBwZW5kQ2hpbGQoaDFFbCk7XG5cbi8vbGFuZGluZyB0YWIgZGVzY3JpcHRpb24tdGV4dFxubGV0IGRlc2NyaXB0aW9uQXJyYXkgPSBbXG4gICAgXCJUb2l0IGlzIGEgYnJldyBwdWIsIGJyZXdpbmcgYSByZXZvbHV0aW9uYXJ5IGN1bHR1cmUuIDxicj5XZSBzdGFydGVkIG91dCBhcyBhIHN3ZWV0IGxpdHRsZSBCZW5nYWx1cnUgYnJld2luZyBjdWx0dXJlIHdpdGggdGhlIHByb21pc2Ugb2Ygc29tZSBib2RhY2lvdXMgYnJld3MsIGZhYnVsb3VzIGZvb2RzIGFuZCBhIHN1cHJlbWUgYnJldy1wdWIgZXhwZXJpZW5jZS5cIixcbiAgICBcIkFuZCB0aGF0J3MgZXhhY3RseSB3aGF0IHdlJ3ZlIGJyb3VnaHQgdG8gTXVtYmFpICYgbm93IHRvIFB1bmUhXCIsXG4gICAgXCJZb3UgY2FuIGZpbmQgdXMgZG9pbmcgb3VyIHRoaW5nIG9uIDEwMGZ0IHJvYWQgSW5kaXJhbmFnYXIgaW4gQmVuZ2FsdXJ1LCBpbiBMb3dlciBQYXJlbCBpbiBNdW1iYWksIGFuZCBLYWx5YW5pTmFnYXIgaW4gUHVuZS4uIHBhc3Npbmcgb24gb3VyIHBhc3Npb24gZm9yIGJlZXIgdG8gb3RoZXJzLlwiLFxuICAgIFwiQ29tZSBieS4gVHJ5IGV2ZXJ5dGhpbmcgdHdpY2UuIExlYXJuLCBsb3ZlLCBsaW5nZXIsIHN0YWdnZXIsIHNsdXIsIHdoYXRldmVyLiBUaGlzIGlzIGEgcmV2b2x1dGlvbiwgYW5kIHdlJ3ZlIGdvdCBiZWVyLlwiXG5dXG5cbmRlc2NyaXB0aW9uQXJyYXkuZm9yRWFjaChkZXNjcmlwdGlvbiA9PiB7XG4gICAgbGV0IHBhcmFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFFbC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcbiAgICBsYW5kaW5nVGFiRWwuYXBwZW5kQ2hpbGQocGFyYUVsKTtcbn0pO1xuXG5jb25zdCBzZWVCZWVyc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNlZUJlZXJzRWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiZWVycy1idG5cIik7XG5zZWVCZWVyc0VsLmlubmVySFRNTCA9IFwiU0VFIE9VUiBCRUVSU1wiO1xuXG5sYW5kaW5nVGFiRWwuYXBwZW5kQ2hpbGQoc2VlQmVlcnNFbCk7XG5cbmJhY2tncm91bmRFbC5hcHBlbmRDaGlsZChsYW5kaW5nVGFiRWwpXG5cbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmRFbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQge2NvbnRlbnRFbCwgdGFic0VsZW1lbnRMaXN0fSBmcm9tICcuL2xhbmRpbmctcGFnZS5qcyc7XG5pbXBvcnQgbGFuZGluZ1RhYkVsIGZyb20gJy4vbGFuZGluZy10YWIuanMnO1xuaW1wb3J0IGJlZXJzVGFiRWwgZnJvbSAnLi9iZWVycy10YWIuanMnO1xuaW1wb3J0IGZvb2RFbCBmcm9tICcuL2Zvb2QtZHJpbmtzLmpzJztcbmltcG9ydCBrdWRpeEVsIGZyb20gJy4va3VkaXgtY2x1Yi5qcyc7XG5cbi8vbGFuZGluZyBwYWdlIHRhYiBhcyBkZWFmdWx0XG5sZXQgdGFiVG9CZURpc3BsYXllZCA9IGxhbmRpbmdUYWJFbDtcblxuY29udGVudEVsLmFwcGVuZENoaWxkKHRhYlRvQmVEaXNwbGF5ZWQpO1xuXG4vL2xpbmsgbG9nbyB0byBob21lIHBhZ2VcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xubG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnRFbC5yZW1vdmVDaGlsZCh0YWJUb0JlRGlzcGxheWVkKTtcbiAgICB0YWJUb0JlRGlzcGxheWVkID0gbGFuZGluZ1RhYkVsO1xuICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZCh0YWJUb0JlRGlzcGxheWVkKTtcbn0pO1xuXG4vL2xpbmsgdG8gc2VlIG91ciBiZWVycyBidG5cbmxldCBiZWVyc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVlcnMtYnRuXCIpO1xuYmVlcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY29udGVudEVsLnJlbW92ZUNoaWxkKHRhYlRvQmVEaXNwbGF5ZWQpO1xuICAgIHRhYlRvQmVEaXNwbGF5ZWQgPSBiZWVyc1RhYkVsO1xuICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZCh0YWJUb0JlRGlzcGxheWVkKTtcbn0pXG5cbi8vdGFiIHRvIGRpc3BsYXlcbmxldCBwYWdlQXJyYXkgPSBbYmVlcnNUYWJFbCwgZm9vZEVsLCBrdWRpeEVsXTtcblxuZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhYnNFbGVtZW50TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCB0YWIgPSB0YWJzRWxlbWVudExpc3RbaW5kZXhdO1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgIGNvbnRlbnRFbC5yZW1vdmVDaGlsZCh0YWJUb0JlRGlzcGxheWVkKTtcbiAgICAgICAgdGFiVG9CZURpc3BsYXllZCA9IHBhZ2VBcnJheVtpbmRleF07XG4gICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZCh0YWJUb0JlRGlzcGxheWVkKTtcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
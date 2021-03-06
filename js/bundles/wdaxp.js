var pageComponent =
webpackJsonppageComponent([23],{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _globalSoy = __webpack_require__(289);

var _globalSoy2 = _interopRequireDefault(_globalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wdaxp = function (_Component) {
  _inherits(wdaxp, _Component);

  function wdaxp() {
    _classCallCheck(this, wdaxp);

    return _possibleConstructorReturn(this, (wdaxp.__proto__ || Object.getPrototypeOf(wdaxp)).apply(this, arguments));
  }

  return wdaxp;
}(_metalComponent2.default);

;

_metalSoy2.default.register(wdaxp, _globalSoy2.default);

exports.default = wdaxp;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.wdaxp = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from global.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace wdaxp.
   * @public
   */

  goog.module('wdaxp.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param525 = function param525() {
      ie_open('h6');
      var dyn37 = opt_data.page.description;
      if (typeof dyn37 == 'function') dyn37();else if (dyn37 != null) itext(dyn37);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('execute');
      ie_close('h2');
      ie_open('p');
      itext('Execute query on the schema');
      ie_close('p');
      $templateAlias2({ code: 'G.Schema schema = new G.Schema();\nObject data = G.execute(schema, query);', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('G.execute(Schema, String)');
      ie_close('td');
      ie_open('td');
      itext('Execute with schema and query');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('G.execute(Schema, Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Execute with schema and query data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('G.execute(String)');
      ie_close('td');
      ie_open('td');
      itext('Execute with query');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('G.execute(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Execute with query data');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('getObjectType');
      ie_close('h2');
      ie_open('p');
      itext('Get the registered object type');
      ie_close('p');
      $templateAlias2({ code: 'G.ObjectType objectType = G.getObjectType(\'Book\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('describe');
      ie_close('h2');
      ie_open('p');
      itext('Describe the given object type by name Return the description of the schema if no object type given');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, String> result = G.describe(\'Book\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('registerDirective');
      ie_close('h2');
      ie_open('p');
      itext('Register a custom direcitve');
      ie_close('p');
      $templateAlias2({ code: 'G.registerDirective(new MyCustomDirective());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param525 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'wdaxp.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var wdaxp = function (_Component) {
  _inherits(wdaxp, _Component);

  function wdaxp() {
    _classCallCheck(this, wdaxp);

    return _possibleConstructorReturn(this, (wdaxp.__proto__ || Object.getPrototypeOf(wdaxp)).apply(this, arguments));
  }

  return wdaxp;
}(_metalComponent2.default);

_metalSoy2.default.register(wdaxp, templates);
exports.wdaxp = wdaxp;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);
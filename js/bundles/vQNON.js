var pageComponent =
webpackJsonppageComponent([15],{

/***/ 298:
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

var _step_1Soy = __webpack_require__(299);

var _step_1Soy2 = _interopRequireDefault(_step_1Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vQNON = function (_Component) {
  _inherits(vQNON, _Component);

  function vQNON() {
    _classCallCheck(this, vQNON);

    return _possibleConstructorReturn(this, (vQNON.__proto__ || Object.getPrototypeOf(vQNON)).apply(this, arguments));
  }

  return vQNON;
}(_metalComponent2.default);

;

_metalSoy2.default.register(vQNON, _step_1Soy2.default);

exports.default = vQNON;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.vQNON = undefined;

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

  // This file was automatically generated from step_1.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace vQNON.
   * @public
   */

  goog.module('vQNON.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param609 = function param609() {
      ie_open('h2');
      var dyn41 = opt_data.page.title;
      if (typeof dyn41 == 'function') dyn41();else if (dyn41 != null) itext(dyn41);
      ie_close('h2');
      ie_open('p');
      itext('G.apex has a dependency on ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('First, we will include R.apex.');
      ie_close('p');
      ie_open('p');
      itext('Include ');
      ie_open('strong');
      itext('Func.cls');
      ie_close('strong');
      itext(', ');
      ie_open('strong');
      itext('R.cls');
      ie_close('strong');
      itext(', and ');
      ie_open('strong');
      itext('RTest.cls');
      ie_close('strong');
      itext('(optional) into your Org, and R.apex is ready.');
      ie_close('p');
      ie_open('p');
      itext('Then, we will include G.apex.');
      ie_close('p');
      ie_open('p');
      itext('Include ');
      ie_open('strong');
      itext('G.cls');
      ie_close('strong');
      itext(', and ');
      ie_open('strong');
      itext('GTest.cls');
      ie_close('strong');
      itext('(optional) into your Org, and you are ready to go.');
      ie_close('p');
      ie_open('p');
      itext('If you want to use Query Editor, include ');
      ie_open('strong');
      itext('GDemoController.cls');
      ie_close('strong');
      itext(', and ');
      ie_open('strong');
      itext('GDemo');
      ie_close('strong');
      itext(' lightning component into your Org.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param609 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'vQNON.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var vQNON = function (_Component) {
  _inherits(vQNON, _Component);

  function vQNON() {
    _classCallCheck(this, vQNON);

    return _possibleConstructorReturn(this, (vQNON.__proto__ || Object.getPrototypeOf(vQNON)).apply(this, arguments));
  }

  return vQNON;
}(_metalComponent2.default);

_metalSoy2.default.register(vQNON, templates);
exports.vQNON = vQNON;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[298]);
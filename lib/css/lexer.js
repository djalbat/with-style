"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _entries = _interopRequireDefault(require("./entries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CSSLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(CSSLexer, _CommonLexer);

  var _super = _createSuper(CSSLexer);

  function CSSLexer() {
    _classCallCheck(this, CSSLexer);

    return _super.apply(this, arguments);
  }

  _createClass(CSSLexer, [{
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      return _get(_getPrototypeOf(CSSLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
    }
  }, {
    key: "matchBrokenComment",
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchSingleLineComment",
    value: function matchSingleLineComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchRegularExpression",
    value: function matchRegularExpression(content) {
      return null;
    }
  }], [{
    key: "fromEntries",
    value: function fromEntries(entries) {
      return _occamLexers.CommonLexer.fromEntries(CSSLexer, entries);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return _occamLexers.CommonLexer.fromNothing(CSSLexer);
    }
  }]);

  return CSSLexer;
}(_occamLexers.CommonLexer);

exports["default"] = CSSLexer;

_defineProperty(CSSLexer, "entries", _entries["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbIkNTU0xleGVyIiwiY29udGVudCIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJpbkNvbW1lbnQiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozt1Q0FDQUMsTyxFQUFTO0FBQUUsOEZBQWdDQSxPQUFoQyxFQUF5Q0MseUNBQXpDO0FBQXlFOzs7dUNBRXBGRCxPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRixPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRTVCRixPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7c0RBRWpDRixPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRS9DRixPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUk3QkcsTyxFQUFTO0FBQUUsYUFBT0MseUJBQVlDLFdBQVosQ0FBd0JOLFFBQXhCLEVBQWtDSSxPQUFsQyxDQUFQO0FBQW9EOzs7a0NBRTdEO0FBQUUsYUFBT0MseUJBQVlFLFdBQVosQ0FBd0JQLFFBQXhCLENBQVA7QUFBMkM7Ozs7RUFqQjlCSyx3Qjs7OztnQkFBakJMLFEsYUFhRkksbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1NTTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ1NTTGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKENTU0xleGVyKTsgfVxyXG59XHJcbiJdfQ==
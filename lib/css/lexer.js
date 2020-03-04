'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var entries = require('./entries');

var CommonLexer = lexers.CommonLexer,
    EndOfLineSignificantToken = lexers.EndOfLineSignificantToken;

var CSSLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(CSSLexer, _CommonLexer);

  function CSSLexer() {
    _classCallCheck(this, CSSLexer);

    return _possibleConstructorReturn(this, _getPrototypeOf(CSSLexer).apply(this, arguments));
  }

  _createClass(CSSLexer, [{
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      return _get(_getPrototypeOf(CSSLexer.prototype), "tokeniseEndOfLines", this).call(this, content, EndOfLineSignificantToken);
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
      return CommonLexer.fromEntries(CSSLexer, entries);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return CommonLexer.fromNothing(CSSLexer);
    }
  }]);

  return CSSLexer;
}(CommonLexer);

Object.assign(CSSLexer, {
  entries: entries
});
module.exports = CSSLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiQ1NTTGV4ZXIiLCJjb250ZW50IiwiaW5Db21tZW50IiwiZnJvbUVudHJpZXMiLCJmcm9tTm90aGluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0lBRVFFLFcsR0FBMkNILE0sQ0FBM0NHLFc7SUFBYUMseUIsR0FBOEJKLE0sQ0FBOUJJLHlCOztJQUVmQyxROzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsOEZBQWdDQSxPQUFoQyxFQUF5Q0YseUJBQXpDO0FBQXNFOzs7dUNBRWpGRSxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRCxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRTVCRCxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7c0RBRWpDRCxPLEVBQVNDLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRS9DRCxPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUU3QkosTyxFQUFTO0FBQUUsYUFBT0MsV0FBVyxDQUFDSyxXQUFaLENBQXdCSCxRQUF4QixFQUFrQ0gsT0FBbEMsQ0FBUDtBQUFvRDs7O2tDQUU3RDtBQUFFLGFBQU9DLFdBQVcsQ0FBQ00sV0FBWixDQUF3QkosUUFBeEIsQ0FBUDtBQUEyQzs7OztFQWY3Q0YsVzs7QUFrQnZCTyxNQUFNLENBQUNDLE1BQVAsQ0FBY04sUUFBZCxFQUF3QjtBQUN0QkgsRUFBQUEsT0FBTyxFQUFQQTtBQURzQixDQUF4QjtBQUlBVSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XHJcblxyXG5jb25zdCB7IENvbW1vbkxleGVyLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gPSBsZXhlcnM7XHJcblxyXG5jbGFzcyBDU1NMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gc3VwZXIudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4pOyB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ1NTTGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKENTU0xleGVyKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKENTU0xleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ1NTTGV4ZXI7XHJcbiJdfQ==
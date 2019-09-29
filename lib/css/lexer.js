'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var entries = require('./entries');

var CommonLexer = lexers.CommonLexer,
    EndOfLineSignificantToken = lexers.EndOfLineSignificantToken;

var CSSLexer = function (_CommonLexer) {
  _inherits(CSSLexer, _CommonLexer);

  function CSSLexer() {
    _classCallCheck(this, CSSLexer);

    return _possibleConstructorReturn(this, (CSSLexer.__proto__ || Object.getPrototypeOf(CSSLexer)).apply(this, arguments));
  }

  _createClass(CSSLexer, [{
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(content) {
      return _get(CSSLexer.prototype.__proto__ || Object.getPrototypeOf(CSSLexer.prototype), 'tokeniseEndOfLines', this).call(this, content, EndOfLineSignificantToken);
    }
  }, {
    key: 'tokeniseRegularExpressions',
    value: function tokeniseRegularExpressions(tokensOrContents) {}
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CSSLexer, entries);
    }
  }, {
    key: 'fromNothing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvbGV4ZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVudHJpZXMiLCJDb21tb25MZXhlciIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJDU1NMZXhlciIsImNvbnRlbnQiLCJ0b2tlbnNPckNvbnRlbnRzIiwiZnJvbUVudHJpZXMiLCJmcm9tTm90aGluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7O0lBRVFFLFcsR0FBMkNILE0sQ0FBM0NHLFc7SUFBYUMseUIsR0FBOEJKLE0sQ0FBOUJJLHlCOztJQUVmQyxROzs7Ozs7Ozs7Ozt1Q0FDZUMsTyxFQUFTO0FBQUUsb0lBQWdDQSxPQUFoQyxFQUF5Q0YseUJBQXpDO0FBQXNFOzs7K0NBRXpFRyxnQixFQUFrQixDQUFFOzs7Z0NBRTVCTCxPLEVBQVM7QUFBRSxhQUFPQyxZQUFZSyxXQUFaLENBQXdCSCxRQUF4QixFQUFrQ0gsT0FBbEMsQ0FBUDtBQUFvRDs7O2tDQUU3RDtBQUFFLGFBQU9DLFlBQVlNLFdBQVosQ0FBd0JKLFFBQXhCLENBQVA7QUFBMkM7Ozs7RUFQN0NGLFc7O0FBVXZCTyxPQUFPQyxNQUFQLENBQWNOLFFBQWQsRUFBd0I7QUFDdEJIO0FBRHNCLENBQXhCOztBQUlBVSxPQUFPQyxPQUFQLEdBQWlCUixRQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xyXG5cclxuY29uc3QgeyBDb21tb25MZXhlciwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9ID0gbGV4ZXJzO1xyXG5cclxuY2xhc3MgQ1NTTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICB0b2tlbmlzZVJlZ3VsYXJFeHByZXNzaW9ucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ1NTTGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKENTU0xleGVyKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKENTU0xleGVyLCB7XHJcbiAgZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ1NTTGV4ZXI7XHJcbiJdfQ==
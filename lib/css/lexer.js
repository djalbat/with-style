'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var entries = require('./entries');

var CommonLexer = lexers.CommonLexer,
    SignificantEndOfLineTokens = lexers.SignificantEndOfLineTokens;

var CSSLexer = function (_CommonLexer) {
  _inherits(CSSLexer, _CommonLexer);

  function CSSLexer() {
    _classCallCheck(this, CSSLexer);

    return _possibleConstructorReturn(this, (CSSLexer.__proto__ || Object.getPrototypeOf(CSSLexer)).apply(this, arguments));
  }

  _createClass(CSSLexer, [{
    key: 'tokeniseEndOfLines',
    value: function tokeniseEndOfLines(tokensOrContents) {
      SignificantEndOfLineTokens.tokenise(tokensOrContents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvbGV4ZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVudHJpZXMiLCJDb21tb25MZXhlciIsIlNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ1NTTGV4ZXIiLCJ0b2tlbnNPckNvbnRlbnRzIiwidG9rZW5pc2UiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7O0lBRVFFLFcsR0FBNENILE0sQ0FBNUNHLFc7SUFBYUMsMEIsR0FBK0JKLE0sQ0FBL0JJLDBCOztJQUVmQyxROzs7Ozs7Ozs7Ozt1Q0FDZUMsZ0IsRUFBa0I7QUFBRUYsaUNBQTJCRyxRQUEzQixDQUFvQ0QsZ0JBQXBDO0FBQXdEOzs7K0NBRXBFQSxnQixFQUFrQixDQUFFOzs7Z0NBRTVCSixPLEVBQVM7QUFBRSxhQUFPQyxZQUFZSyxXQUFaLENBQXdCSCxRQUF4QixFQUFrQ0gsT0FBbEMsQ0FBUDtBQUFvRDs7O2tDQUU3RDtBQUFFLGFBQU9DLFlBQVlNLFdBQVosQ0FBd0JKLFFBQXhCLENBQVA7QUFBMkM7Ozs7RUFQN0NGLFc7O0FBVXZCTyxPQUFPQyxNQUFQLENBQWNOLFFBQWQsRUFBd0I7QUFDdEJIO0FBRHNCLENBQXhCOztBQUlBVSxPQUFPQyxPQUFQLEdBQWlCUixRQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xyXG5cclxuY29uc3QgeyBDb21tb25MZXhlciwgU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMgfSA9IGxleGVycztcclxuXHJcbmNsYXNzIENTU0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyh0b2tlbnNPckNvbnRlbnRzKSB7IFNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zLnRva2VuaXNlKHRva2Vuc09yQ29udGVudHMpOyB9XHJcblxyXG4gIHRva2VuaXNlUmVndWxhckV4cHJlc3Npb25zKHRva2Vuc09yQ29udGVudHMpIHt9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDU1NMZXhlciwgZW50cmllcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ1NTTGV4ZXIpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQ1NTTGV4ZXIsIHtcclxuICBlbnRyaWVzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDU1NMZXhlcjtcclxuIl19
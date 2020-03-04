'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers'),
    parsers = require('occam-parsers');

var bnf = require('./bnf');

var BNFLexer = lexers.BNFLexer,
    BNFParser = parsers.BNFParser,
    CommonParser = parsers.CommonParser;
var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var CSSParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(CSSParser, _CommonParser);

  function CSSParser() {
    _classCallCheck(this, CSSParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(CSSParser).apply(this, arguments));
  }

  _createClass(CSSParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          cssParser = new CSSParser(rules);
      return cssParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var cssParser = CSSParser.fromBNF(bnf);
      return cssParser;
    }
  }]);

  return CSSParser;
}(CommonParser);

Object.assign(CSSParser, {
  bnf: bnf
});
module.exports = CSSParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFyc2VycyIsImJuZiIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkNTU1BhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImNzc1BhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCO0FBQUEsSUFDTUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUR2Qjs7QUFHQSxJQUFNRSxHQUFHLEdBQUdGLE9BQU8sQ0FBQyxPQUFELENBQW5COztBQUVNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsU0FERixHQUM4QkgsT0FEOUIsQ0FDRUcsU0FERjtBQUFBLElBQ2FDLFlBRGIsR0FDOEJKLE9BRDlCLENBQ2FJLFlBRGI7QUFHTixJQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0osU0FBUyxDQUFDRyxXQUFWLEVBRGxCOztJQUdNRSxTOzs7Ozs7Ozs7Ozs0QkFDV1AsRyxFQUFLO0FBQ2xCLFVBQU1RLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCVCxHQUF2QixDQUFmO0FBQUEsVUFDTVUsS0FBSyxHQUFHSixTQUFTLENBQUNLLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxTQUFTLEdBQUcsSUFBSUwsU0FBSixDQUFjRyxLQUFkLENBRmxCO0FBSUEsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLFNBQVMsR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCYixHQUFsQixDQUFsQjtBQUVBLGFBQU9ZLFNBQVA7QUFDRDs7OztFQWJxQlQsWTs7QUFnQnhCVyxNQUFNLENBQUNDLE1BQVAsQ0FBY1IsU0FBZCxFQUF5QjtBQUN2QlAsRUFBQUEsR0FBRyxFQUFIQTtBQUR1QixDQUF6QjtBQUlBZ0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixTQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJORlBhcnNlciwgQ29tbW9uUGFyc2VyIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgQ1NTUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlciA9IG5ldyBDU1NQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGNzc1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGNzc1BhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENTU1BhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTU1BhcnNlcjtcbiJdfQ==
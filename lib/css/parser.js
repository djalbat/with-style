'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _occamParsers = require("occam-parsers");

var _bnf = _interopRequireDefault(require("./bnf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

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
      var cssParser = CSSParser.fromBNF(_bnf["default"]);
      return cssParser;
    }
  }]);

  return CSSParser;
}(_occamParsers.CommonParser);

exports["default"] = CSSParser;
Object.assign(CSSParser, {
  bnf: _bnf["default"]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJDU1NQYXJzZXIiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJjc3NQYXJzZXIiLCJmcm9tQk5GIiwiQ29tbW9uUGFyc2VyIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Msd0JBQVVGLFdBQVYsRUFEbEI7O0lBR3FCRyxTOzs7Ozs7Ozs7Ozs0QkFDSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCRixHQUF2QixDQUFmO0FBQUEsVUFDTUcsS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxTQUFTLEdBQUcsSUFBSU4sU0FBSixDQUFjSSxLQUFkLENBRmxCO0FBSUEsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLFNBQVMsR0FBR04sU0FBUyxDQUFDTyxPQUFWLENBQWtCTixlQUFsQixDQUFsQjtBQUVBLGFBQU9LLFNBQVA7QUFDRDs7OztFQWJvQ0UsMEI7OztBQWdCdkNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVixTQUFkLEVBQXlCO0FBQ3ZCQyxFQUFBQSxHQUFHLEVBQUhBO0FBRHVCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gJ29jY2FtLWxleGVycyc7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gJ29jY2FtLXBhcnNlcnMnO1xuXG5pbXBvcnQgYm5mIGZyb20gJy4vYm5mJztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENTU1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBjc3NQYXJzZXIgPSBuZXcgQ1NTUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjc3NQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBjc3NQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NQYXJzZXIsIHtcbiAgYm5mXG59KTtcbiJdfQ==
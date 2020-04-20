"use strict";

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

var CSSParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(CSSParser, _CommonParser);

  var _super = _createSuper(CSSParser);

  function CSSParser() {
    _classCallCheck(this, CSSParser);

    return _super.apply(this, arguments);
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

_defineProperty(CSSParser, "bnf", _bnf["default"]);

Object.assign(CSSParser, {
  bnf: _bnf["default"]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJDU1NQYXJzZXIiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJjc3NQYXJzZXIiLCJmcm9tQk5GIiwiQ29tbW9uUGFyc2VyIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Msd0JBQVVGLFdBQVYsRUFEbEI7O0lBR3FCRyxTOzs7Ozs7Ozs7Ozs7OzRCQUdKQyxHLEVBQUs7QUFDbEIsVUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUJGLEdBQXZCLENBQWY7QUFBQSxVQUNNRyxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sZUFBVixDQUEwQkgsTUFBMUIsQ0FEZDtBQUFBLFVBRU1JLFNBQVMsR0FBRyxJQUFJTixTQUFKLENBQWNJLEtBQWQsQ0FGbEI7QUFJQSxhQUFPRSxTQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsU0FBUyxHQUFHTixTQUFTLENBQUNPLE9BQVYsQ0FBa0JOLGVBQWxCLENBQWxCO0FBRUEsYUFBT0ssU0FBUDtBQUNEOzs7O0VBZm9DRSwwQjs7OztnQkFBbEJSLFMsU0FDTkMsZTs7QUFpQmZRLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVixTQUFkLEVBQXlCO0FBQ3ZCQyxFQUFBQSxHQUFHLEVBQUhBO0FBRHVCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1NTUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgY3NzUGFyc2VyID0gbmV3IENTU1BhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gY3NzUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gY3NzUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ1NTUGFyc2VyLCB7XG4gIGJuZlxufSk7XG4iXX0=
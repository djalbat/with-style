'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    parsers = require('occam-parsers');

var bnf = require('./bnf');

var BNFLexer = lexers.BNFLexer,
    BNFParser = parsers.BNFParser,
    CommonParser = parsers.CommonParser;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var CSSParser = function (_CommonParser) {
  _inherits(CSSParser, _CommonParser);

  function CSSParser() {
    _classCallCheck(this, CSSParser);

    return _possibleConstructorReturn(this, (CSSParser.__proto__ || Object.getPrototypeOf(CSSParser)).apply(this, arguments));
  }

  _createClass(CSSParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          cssParser = new CSSParser(rules);

      return cssParser;
    }
  }, {
    key: 'fromNothing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJwYXJzZXJzIiwiYm5mIiwiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQ1NTUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLGVBQVIsQ0FEaEI7O0FBR0EsSUFBTUUsTUFBTUYsUUFBUSxPQUFSLENBQVo7O0FBRU0sSUFBRUcsUUFBRixHQUFlSixNQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxTQURGLEdBQzhCSCxPQUQ5QixDQUNFRyxTQURGO0FBQUEsSUFDYUMsWUFEYixHQUM4QkosT0FEOUIsQ0FDYUksWUFEYjs7O0FBR04sSUFBTUMsV0FBV0gsU0FBU0ksV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlKLFVBQVVHLFdBQVYsRUFEbEI7O0lBR01FLFM7Ozs7Ozs7Ozs7OzRCQUNXUCxHLEVBQUs7QUFDbEIsVUFBTVEsU0FBU0osU0FBU0ssYUFBVCxDQUF1QlQsR0FBdkIsQ0FBZjtBQUFBLFVBQ01VLFFBQVFKLFVBQVVLLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxZQUFZLElBQUlMLFNBQUosQ0FBY0csS0FBZCxDQUZsQjs7QUFJQSxhQUFPRSxTQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsWUFBWUwsVUFBVU0sT0FBVixDQUFrQmIsR0FBbEIsQ0FBbEI7O0FBRUEsYUFBT1ksU0FBUDtBQUNEOzs7O0VBYnFCVCxZOztBQWdCeEJXLE9BQU9DLE1BQVAsQ0FBY1IsU0FBZCxFQUF5QjtBQUN2QlA7QUFEdUIsQ0FBekI7O0FBSUFnQixPQUFPQyxPQUFQLEdBQWlCVixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9ID0gcGFyc2VycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIENTU1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBjc3NQYXJzZXIgPSBuZXcgQ1NTUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjc3NQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBjc3NQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDU1NQYXJzZXI7XG4iXX0=
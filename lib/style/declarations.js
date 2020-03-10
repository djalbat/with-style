'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _node = _interopRequireDefault(require("../utilities/node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _unshift = _necessary.arrayUtilities.unshift,
    asContent = _node["default"].asContent;

var declarationQuery = _occamDom.Query.fromExpression('/*/declaration');

var Declarations = /*#__PURE__*/function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }, {
    key: "unshift",
    value: function unshift(declarations) {
      var array = declarations.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: "asCSS",
    value: function asCSS(indent) {
      var css = '';
      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1;
        this.array.forEach(function (declaration, index) {
          var declarationCSS = index === lastIndex ? "".concat(indent).concat(declaration) : "".concat(indent).concat(declaration, "\n");
          css += declarationCSS;
        });
      }

      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function (declarationNode) {
        var declarationNodeContent = asContent(declarationNode, tokens),
            declaration = declarationNodeContent; ///

        return declaration;
      }),
          declarations = new Declarations(array);
      return declarations;
    }
  }]);

  return Declarations;
}();

exports["default"] = Declarations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJhc0NvbnRlbnQiLCJub2RlVXRpbGl0aWVzIiwiZGVjbGFyYXRpb25RdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJEZWNsYXJhdGlvbnMiLCJhcnJheSIsImRlY2xhcmF0aW9ucyIsImdldEFycmF5IiwiaW5kZW50IiwiY3NzIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImRlY2xhcmF0aW9uIiwiaW5kZXgiLCJkZWNsYXJhdGlvbkNTUyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxRQUFGLEdBQWNDLHlCQUFkLENBQUVELE9BQUY7QUFBQSxJQUNFRSxTQURGLEdBQ2dCQyxnQkFEaEIsQ0FDRUQsU0FERjs7QUFHTixJQUFNRSxnQkFBZ0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsZ0JBQXJCLENBQXpCOztJQUVxQkMsWTtBQUNuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFksRUFBYztBQUNwQixVQUFNRCxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsUUFBYixFQUFkOztBQUVBVixNQUFBQSxRQUFPLENBQUMsS0FBS1EsS0FBTixFQUFhQSxLQUFiLENBQVA7QUFDRDs7OzBCQUVLRyxNLEVBQVE7QUFDWixVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxLQUFLTCxLQUFMLENBQVdLLE1BQTFCOztBQUVBLFVBQUlBLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2QsWUFBTUMsU0FBUyxHQUFHRCxNQUFNLEdBQUcsQ0FBM0I7QUFFQSxhQUFLTCxLQUFMLENBQVdPLE9BQVgsQ0FBbUIsVUFBQ0MsV0FBRCxFQUFjQyxLQUFkLEVBQXdCO0FBQ3pDLGNBQU1DLGNBQWMsR0FBSUQsS0FBSyxLQUFLSCxTQUFYLGFBQ0lILE1BREosU0FDYUssV0FEYixjQUVNTCxNQUZOLFNBRWVLLFdBRmYsT0FBdkI7QUFJQUosVUFBQUEsR0FBRyxJQUFJTSxjQUFQO0FBQ0QsU0FORDtBQU9EOztBQUVELGFBQU9OLEdBQVA7QUFDRDs7O3NDQUV3Qk8sSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZ0JBQWdCLEdBQUdqQixnQkFBZ0IsQ0FBQ2tCLE9BQWpCLENBQXlCSCxJQUF6QixDQUF6QjtBQUFBLFVBQ01YLEtBQUssR0FBR2EsZ0JBQWdCLENBQUNFLEdBQWpCLENBQXFCLFVBQUNDLGVBQUQsRUFBcUI7QUFDaEQsWUFBTUMsc0JBQXNCLEdBQUd2QixTQUFTLENBQUNzQixlQUFELEVBQWtCSixNQUFsQixDQUF4QztBQUFBLFlBQ01KLFdBQVcsR0FBR1Msc0JBRHBCLENBRGdELENBRUo7O0FBRTVDLGVBQU9ULFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUCxZQUFZLEdBQUcsSUFBSUYsWUFBSixDQUFpQkMsS0FBakIsQ0FQckI7QUFTQSxhQUFPQyxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnb2NjYW0tZG9tJztcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSAnbmVjZXNzYXJ5JztcblxuaW1wb3J0IG5vZGVVdGlsaXRpZXMgZnJvbSAnLi4vdXRpbGl0aWVzL25vZGUnO1xuXG5jb25zdCB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc0NvbnRlbnQgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IGRlY2xhcmF0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignLyovZGVjbGFyYXRpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgYXJyYXkgPSBkZWNsYXJhdGlvbnMuZ2V0QXJyYXkoKTtcblxuICAgIHVuc2hpZnQodGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9ICcnO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgICAgdGhpcy5hcnJheS5mb3JFYWNoKChkZWNsYXJhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSAoaW5kZXggPT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtkZWNsYXJhdGlvbn1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtkZWNsYXJhdGlvbn1cXG5gO1xuXG4gICAgICAgIGNzcyArPSBkZWNsYXJhdGlvbkNTUztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoZGVjbGFyYXRpb25Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbk5vZGVDb250ZW50OyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl19
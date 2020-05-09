"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _declaration = _interopRequireDefault(require("./declaration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");

var Declarations = /*#__PURE__*/function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: "getProperties",
    value: function getProperties() {
      var properties = this.array.map(function (declaration) {
        var property = declaration.getProperty();
        return property;
      });
      return properties;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "unshift",
    value: function unshift(declarations) {
      var _this = this;

      var properties = this.getProperties();
      declarations.forEach(function (declaration) {
        var property = declaration.getProperty(),
            propertiesIncludesProperty = properties.includes(property);

        if (!propertiesIncludesProperty) {
          _this.array.unshift(declaration);
        }
      });
    }
  }, {
    key: "asCSS",
    value: function asCSS(className, indent) {
      if (indent === undefined) {
        indent = className; ///

        className = null; ///
      }

      var css = "";
      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1,
            declarationsCSS = this.array.reduce(function (declarationsCSS, declaration, index) {
          var last = index === lastIndex,
              declarationCSS = declaration.asCSS(indent, last);
          declarationsCSS += declarationCSS;
          return declarationsCSS;
        }, "");

        if (className === null) {
          css = declarationsCSS; ///
        } else {
          css = ".".concat(className, " {\n").concat(declarationsCSS, "\n}\n\n");
        }
      }

      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function (declarationNode) {
        var node = declarationNode,
            ///
        declaration = _declaration["default"].fromNodeAndTokens(node, tokens);

        return declaration;
      }),
          declarations = new Declarations(array);
      return declarations;
    }
  }]);

  return Declarations;
}();

exports["default"] = Declarations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwicHJvcGVydGllcyIsIm1hcCIsImRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImRlY2xhcmF0aW9ucyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzSW5jbHVkZXNQcm9wZXJ0eSIsImluY2x1ZGVzIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImluZGVudCIsInVuZGVmaW5lZCIsImNzcyIsImxlbmd0aCIsImxhc3RJbmRleCIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImluZGV4IiwibGFzdCIsImRlY2xhcmF0aW9uQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLGdCQUFyQixDQUF6Qjs7SUFFcUJDLFk7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxVQUFVLEdBQUcsS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsVUFBQ0MsV0FBRCxFQUFpQjtBQUNqRCxZQUFNQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsV0FBWixFQUFqQjtBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUprQixDQUFuQjtBQU1BLGFBQU9ILFVBQVA7QUFDRDs7OzRCQUVPSyxRLEVBQVU7QUFDaEIsV0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRCxRQUFuQjtBQUNEOzs7NEJBRU9FLFksRUFBYztBQUFBOztBQUNwQixVQUFNUCxVQUFVLEdBQUcsS0FBS1EsYUFBTCxFQUFuQjtBQUVBRCxNQUFBQSxZQUFZLENBQUNELE9BQWIsQ0FBcUIsVUFBQ0osV0FBRCxFQUFpQjtBQUNwQyxZQUFNQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsV0FBWixFQUFqQjtBQUFBLFlBQ01LLDBCQUEwQixHQUFHVCxVQUFVLENBQUNVLFFBQVgsQ0FBb0JQLFFBQXBCLENBRG5DOztBQUdBLFlBQUksQ0FBQ00sMEJBQUwsRUFBaUM7QUFDL0IsVUFBQSxLQUFJLENBQUNWLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQlQsV0FBbkI7QUFDRDtBQUNGLE9BUEQ7QUFRRDs7OzBCQUVLVSxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFJQSxNQUFNLEtBQUtDLFNBQWYsRUFBMEI7QUFDeEJELFFBQUFBLE1BQU0sR0FBR0QsU0FBVCxDQUR3QixDQUNKOztBQUVwQkEsUUFBQUEsU0FBUyxHQUFHLElBQVosQ0FId0IsQ0FHTjtBQUNuQjs7QUFFRCxVQUFJRyxHQUFHLEdBQUcsRUFBVjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxLQUFLakIsS0FBTCxDQUFXaUIsTUFBMUI7O0FBRUEsVUFBSUEsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxZQUFNQyxTQUFTLEdBQUdELE1BQU0sR0FBRyxDQUEzQjtBQUFBLFlBQ01FLGVBQWUsR0FBRyxLQUFLbkIsS0FBTCxDQUFXb0IsTUFBWCxDQUFrQixVQUFDRCxlQUFELEVBQWtCaEIsV0FBbEIsRUFBK0JrQixLQUEvQixFQUF5QztBQUMzRSxjQUFNQyxJQUFJLEdBQUlELEtBQUssS0FBS0gsU0FBeEI7QUFBQSxjQUNNSyxjQUFjLEdBQUdwQixXQUFXLENBQUNxQixLQUFaLENBQWtCVixNQUFsQixFQUEwQlEsSUFBMUIsQ0FEdkI7QUFHQUgsVUFBQUEsZUFBZSxJQUFJSSxjQUFuQjtBQUVBLGlCQUFPSixlQUFQO0FBQ0QsU0FQaUIsRUFPZixFQVBlLENBRHhCOztBQVVBLFlBQUlOLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkcsVUFBQUEsR0FBRyxHQUFHRyxlQUFOLENBRHNCLENBQ0U7QUFDekIsU0FGRCxNQUVPO0FBQ0xILFVBQUFBLEdBQUcsY0FBT0gsU0FBUCxpQkFDVE0sZUFEUyxZQUFIO0FBS0Q7QUFDRjs7QUFFRCxhQUFPSCxHQUFQO0FBQ0Q7OztzQ0FFd0JTLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1DLGdCQUFnQixHQUFHL0IsZ0JBQWdCLENBQUNnQyxPQUFqQixDQUF5QkgsSUFBekIsQ0FBekI7QUFBQSxVQUNNekIsS0FBSyxHQUFHMkIsZ0JBQWdCLENBQUN6QixHQUFqQixDQUFxQixVQUFDMkIsZUFBRCxFQUFxQjtBQUNoRCxZQUFNSixJQUFJLEdBQUdJLGVBQWI7QUFBQSxZQUE4QjtBQUN4QjFCLFFBQUFBLFdBQVcsR0FBRzJCLHdCQUFZQyxpQkFBWixDQUE4Qk4sSUFBOUIsRUFBb0NDLE1BQXBDLENBRHBCOztBQUdBLGVBQU92QixXQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTUssWUFBWSxHQUFHLElBQUlULFlBQUosQ0FBaUJDLEtBQWpCLENBUHJCO0FBU0EsYUFBT1EsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuY29uc3QgZGVjbGFyYXRpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5hcnJheS5tYXAoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5KCk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXMoKTtcblxuICAgIGRlY2xhcmF0aW9ucy5mb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBkZWNsYXJhdGlvbi5nZXRQcm9wZXJ0eSgpLFxuICAgICAgICAgICAgcHJvcGVydGllc0luY2x1ZGVzUHJvcGVydHkgPSBwcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFwcm9wZXJ0aWVzSW5jbHVkZXNQcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKGluZGVudCwgbGFzdCk7XG5cbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTICs9IGRlY2xhcmF0aW9uQ1NTO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBcIlwiKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBjc3MgPSBkZWNsYXJhdGlvbnNDU1M7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXX0=